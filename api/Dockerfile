# syntax=docker/dockerfile:1
# check=error=true

# version
ARG RUBY_VERSION=3.2.0

# base
FROM docker.io/library/ruby:$RUBY_VERSION-slim AS api_base

# workdir
WORKDIR /app

# dependencies
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    build-essential \
    git \
    pkg-config \
    tesseract-ocr \
    libtesseract-dev \
    libleptonica-dev \
    imagemagick \
    default-libmysqlclient-dev \
    && rm -rf /var/lib/apt/lists/*

# build
ENV RAILS_ENV="development"
ENV BUNDLE_DEPLOYMENT="1"
ENV BUNDLE_PATH="/usr/local/bundle"

FROM api_base AS build

COPY Gemfile Gemfile.lock ./
RUN bundle install
COPY . .
RUN gem install bundler
RUN bundle exec bootsnap precompile app/ lib/
# RUN SECRET_KEY_BASE_DUMMY=1 ./bin/rails assets:precompile

# app
FROM api_base

# Copy built artifacts: gems, application
COPY --from=build "${BUNDLE_PATH}" "${BUNDLE_PATH}"
COPY --from=build /app /app
