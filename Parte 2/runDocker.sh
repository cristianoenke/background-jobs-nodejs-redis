#!/bin/bash

# Baixa a imagem
docker pull redis

# Remove o container, se existir
docker stop redis
docker container rm redis

# Gera o container
docker run --name redis -p 6379:6379 -d redis
