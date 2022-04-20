DROP DATABASE `climatedb`;

CREATE DATABASE `climatedb`;

USE `climatedb`;

CREATE TABLE `information` (id int NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR (100) NOT NULL, description VARCHAR (700) NOT NULL);

INSERT INTO information VALUES (1, "Temperature","DATA 1 <br><br> How do you feel the temperature in your zone right now <br><br>Note: Temperature in this room can vary between 18.5°C and 21.5°");
INSERT INTO information VALUES (2, "Air Quality","DATA 2 <br><br> How do you feel the pollution level in your zone right now?<br><br>Very tired: the pollution is high, you feel sleepy, tired.<br><br>Very energetic: the pollution is low, you feel fresh and full of energy.<br><br>To give a good evaluation, lack of sleep or excessive physical activities should not be counted as factors of tiredness.");
INSERT INTO information VALUES (3, "Humidity","DATA 3 <br><br> How do you feel the humidity in your zone right now?<br><br>Very dry: you feel your throat is dry.<br> Very muggy: unpleasantly warm and humid, clammy skin.<br><br>Note: Humidity in this room can vary between 60% and 80%");
INSERT INTO information VALUES (4, "OTHER","DATA 3 <br><br> Other description");