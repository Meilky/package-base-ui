FROM rust:latest AS builder

RUN update-ca-certificates

# Create appuser
ENV USER=api
ENV UID=10001

RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/nonexistent" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid "${UID}" \
    "${USER}"


WORKDIR /backend

RUN rustup override set nightly

COPY ./src ./src
COPY ./Cargo.lock .
COPY ./Cargo.toml .
COPY ./Rocket.toml .

RUN ls -la

RUN cargo build --release

####################################################################################################
## Final image
####################################################################################################
FROM debian:bookworm-slim

# Import from builder.
COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder /etc/group /etc/group

WORKDIR /api

# Copy our build
COPY --from=builder /backend/target/release/backend /usr/local/bin/backend
COPY ./Rocket.toml .

# Use an unprivileged user.
USER api:api

CMD ["backend"]
