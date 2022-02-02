FROM rust:1.58 as build

# create a new empty shell project
RUN USER=root cargo new --bin serve
WORKDIR /serve

# copy over your manifests
COPY ./Cargo.toml ./Cargo.toml
COPY ./Rocket.toml ./Rocket.toml

# this build step will cache your dependencies
RUN cargo build --release
RUN rm src/*.rs

# copy your source tree
COPY ./src ./src

# build for release
RUN rm ./target/release/deps/serve*
RUN cargo build --release

# our final base
FROM debian:bookworm-slim

# copy the build artifact from the build stage
COPY --from=build /serve/target/release/serve .

# set the startup command to run your binary
CMD ["./serve"]
