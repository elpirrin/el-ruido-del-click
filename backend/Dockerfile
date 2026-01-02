# ---------- BUILD ----------
FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app/backend
COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn clean package -DskipTests

# ---------- RUN ----------
FROM eclipse-temurin:17-jdk

WORKDIR /app/backend
COPY --from=build /app/backend/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]