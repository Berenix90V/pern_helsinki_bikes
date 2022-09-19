\connect helsinki_bikes;
CREATE TABLE trips(
    Trip_ID SERIAL,
    Departure_datetime timestamp,
    Return_datetime timestamp,
    Departure_station_id int,
    Departure_station_name VARCHAR(200),
    Return_station_id int,
    Return_station_name VARCHAR(200),
    Covered_distance_m float,
    Duration_sec int,
    CONSTRAINT departure_ID FOREIGN KEY (Departure_station_id) REFERENCES stations(ID),
    CONSTRAINT return_ID FOREIGN KEY (Return_station_id) REFERENCES stations(ID)
);

CREATE TABLE stations (
    ID int unique ,
    Nimi VARCHAR(200),
    Namn VARCHAR(200),
    Name VARCHAR(200),
    Osoite VARCHAR(200),
    Adress VARCHAR(200),
    Kaupunki VARCHAR(200),
    Stad VARCHAR(200),
    Operaattor VARCHAR(200),
    Kapasiteet int,
    x float,
    y float
);

-- IMPORT DATA --
COPY stations
from 'fetch_data/data/originals/stations.csv'
DELIMITER ','
CSV HEADER;

COPY trips(Departure_datetime,Return_datetime,Departure_station_id,Departure_station_name,Return_station_id,Return_station_name,Covered_distance_m,Duration_sec)
from 'fetch_data/data/definitive/2021-05.csv'
DELIMITER ','
CSV HEADER;

-- CHECKS AND TRIGGERS --
ALTER TABLE trips
ADD CONSTRAINT minimum_distance_10_m
CHECK ( Covered_distance_m > 10.0),
ADD CONSTRAINT minimum_time_10_s
CHECK ( Duration_sec > 10 )

-- TODO: test if it works