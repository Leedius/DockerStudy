# FROM openjdk:17-jdk

# COPY build/libs/*SNAPSHOT.jar app.jar

# ENTRYPOINT [ "java", "-jar", "/app.jar" ]

FROM ultramcu/ubuntu4bbb

RUN apt update && apt install -y git

ENTRYPOINT [ "/bin/bash", "-c", "sleep 500" ]