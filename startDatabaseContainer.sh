#!/bin/bash
docker run --name visitor-registrator-postgres \
  --env POSTGRES_USER=visitor-registrator --env POSTGRES_PASSWORD=postgress12345 -p 5432:5432 -d postgres:12.2