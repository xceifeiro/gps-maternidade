#!/bin/bash

# Deploy script for GPS da Maternidade Landing Page

set -e

echo "🚀 Iniciando deploy do GPS da Maternidade..."

# Build da imagem Docker
echo "📦 Construindo imagem Docker..."
docker build -t gps-maternidade:latest .

# Tag para registry (opcional)
if [ ! -z "$DOCKER_REGISTRY" ]; then
    echo "🏷️  Taggeando imagem para registry..."
    docker tag gps-maternidade:latest $DOCKER_REGISTRY/gps-maternidade:latest
    docker push $DOCKER_REGISTRY/gps-maternidade:latest
fi

# Deploy com docker-compose
echo "🔄 Fazendo deploy com docker-compose..."
docker-compose down --remove-orphans
docker-compose up -d

# Aguardar serviço ficar disponível
echo "⏳ Aguardando serviço ficar disponível..."
timeout=60
counter=0

while [ $counter -lt $timeout ]; do
    if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
        echo "✅ Serviço está rodando!"
        break
    fi
    
    echo "Aguardando... ($counter/$timeout)"
    sleep 2
    counter=$((counter + 2))
done

if [ $counter -ge $timeout ]; then
    echo "❌ Timeout: Serviço não ficou disponível"
    exit 1
fi

echo "🎉 Deploy concluído com sucesso!"
echo "🌐 Aplicação disponível em: http://localhost:3000"
