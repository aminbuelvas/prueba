-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-02-2018 a las 22:55:46
-- Versión del servidor: 10.1.25-MariaDB
-- Versión de PHP: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `transporte_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE `ciudades` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `fk_estado` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ciudades`
--

INSERT INTO `ciudades` (`id`, `nombre`, `fk_estado`) VALUES
(1, 'Sacramento', 1),
(2, 'Los Angeles', 1),
(3, 'Denver', 2),
(4, 'Tallahassee', 3),
(5, 'Miami', 3),
(6, 'Atlanta', 4),
(7, 'Albany', 5),
(8, 'New York City', 5),
(9, 'Houston', 6),
(10, 'Austin', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados`
--

CREATE TABLE `estados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `estados`
--

INSERT INTO `estados` (`id`, `nombre`) VALUES
(1, 'California'),
(2, 'Colorado'),
(3, 'Florida'),
(4, 'Georgia'),
(5, 'New York'),
(6, 'Texas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `psw` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `experiencia` enum('Menos de 1 aÃ±o','Entre 1 y 5 aÃ±os','Entre 5 y 10 aÃ±os','Mas de 10 aÃ±os') NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `sexo` enum('Masculino','Femenino','','') NOT NULL,
  `tipo_vehiculo` enum('automovil','bus','automovil y bus','') NOT NULL,
  `fuera_ciudad` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `psw`, `email`, `experiencia`, `fecha_nacimiento`, `sexo`, `tipo_vehiculo`, `fuera_ciudad`) VALUES
(1, 'Jose PÃ©rez', '987654321', 'jose.perez@mail.com', 'Menos de 1 aÃ±o', '1990-10-11', 'Masculino', 'automovil', 0),
(2, 'Carlos Ramirez', '12345', 'c_ramirez@mail.com', 'Mas de 10 aÃ±os', '1974-06-20', 'Masculino', 'automovil y bus', 1),
(3, 'Gabriela Martinez', '12345', 'gama@mail.com', 'Entre 1 y 5 aÃ±os', '1983-03-17', 'Femenino', 'automovil', 1),
(4, 'Rodrigo Jones', '12345', 'rodrigo.j@mail.com', 'Mas de 10 aÃ±os', '1975-12-31', 'Masculino', 'automovil y bus', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculos`
--

CREATE TABLE `vehiculos` (
  `placa` varchar(7) NOT NULL,
  `fabricante` varchar(20) NOT NULL,
  `modelo` year(4) NOT NULL,
  `referencia` varchar(20) NOT NULL,
  `capacidad` int(11) NOT NULL,
  `tipo` enum('automovil','bus','','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `vehiculos`
--

INSERT INTO `vehiculos` (`placa`, `fabricante`, `modelo`, `referencia`, `capacidad`, `tipo`) VALUES
('FRW-875', 'KIA', 2014, 'G4', 10, 'automovil'),
('KDM-324', 'KIA', 2013, 'G4', 10, 'automovil'),
('QSZ-749', 'KIA', 2016, 'G7', 12, 'automovil'),
('RSL-007', 'RENAULT', 2015, 'R9', 20, 'bus'),
('YUL-210', 'RENAULT', 2015, 'R9', 20, 'bus');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viajes`
--

CREATE TABLE `viajes` (
  `id` int(11) NOT NULL,
  `fk_ciudad_origen` int(2) NOT NULL,
  `fk_ciudad_destino` int(2) NOT NULL,
  `fk_vehiculo` varchar(7) NOT NULL,
  `fk_conductor` int(11) NOT NULL,
  `fecha_salida` date NOT NULL,
  `fecha_llegada` date NOT NULL,
  `hora_salida` time NOT NULL,
  `hora_llegada` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `viajes`
--

INSERT INTO `viajes` (`id`, `fk_ciudad_origen`, `fk_ciudad_destino`, `fk_vehiculo`, `fk_conductor`, `fecha_salida`, `fecha_llegada`, `hora_salida`, `hora_llegada`) VALUES
(1, 1, 3, 'FRW-875', 3, '2016-11-01', '2016-11-03', '08:00:00', '17:00:00'),
(2, 5, 7, 'KDM-324', 2, '2016-11-02', '2016-11-05', '10:00:00', '09:00:00'),
(3, 2, 8, 'QSZ-749', 2, '2016-11-01', '2016-11-06', '13:00:00', '01:00:00'),
(4, 9, 10, 'RSL-007', 4, '2016-11-02', '2016-11-04', '09:00:00', '22:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estados`
--
ALTER TABLE `estados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email-user` (`email`);

--
-- Indices de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD PRIMARY KEY (`placa`);

--
-- Indices de la tabla `viajes`
--
ALTER TABLE `viajes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de la tabla `estados`
--
ALTER TABLE `estados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `viajes`
--
ALTER TABLE `viajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
