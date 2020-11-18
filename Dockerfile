FROM adoptopenjdk/openjdk11:alpine-jre
VOLUME /tmp
EXPOSE 8088
ARG JAR_FILE=target/todolist-app-1.0.0.jar
ADD ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]