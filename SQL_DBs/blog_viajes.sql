-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 22-05-2021 a las 20:20:58
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blog_viajes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autores`
--

CREATE TABLE `autores` (
  `id` int(11) NOT NULL,
  `pseudonimo` varchar(45) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `autores`
--

INSERT INTO `autores` (`id`, `pseudonimo`, `avatar`, `email`, `contrasena`) VALUES
(1, 'samartinezp', ' images/usuario1.png', 'santiagomartinez1207@gmail.com', 'asdf'),
(2, 'hoal', 'images/usuario1.png', 'pedro@gmail.com', '432q'),
(3, 'hola', 'images/usuario1.png', 'hola@gmail.com', 'hola'),
(4, 'jola', 'images/usuario1.png', 'jola@glk.co', 'hola'),
(5, 'asdf', 'brave_TfljSuCVlh.png', 'jkasdl@fklas.com', 'asdf'),
(6, 'Jaime', 'images/usuario1.png', 'jaimemartinezoboe@gmail.com', 'HOLABLOG'),
(7, 'abc', 'images/usuario1.png', 'abc@gmail.com', 'abc'),
(8, 'gb', 'images/usuario1.png', 'gb@ma.co', 'gb'),
(9, 'hm', 'images/usuario1.png', 'hm@m.co', 'hm'),
(10, 'jo', 'images/usuario1.png', 'jo@j.co', 'jo'),
(11, 'fdaddsass', 'images/usuario1.png', 'fd@gl.cok', 'fdk'),
(12, 'abcqwerty', 'images/usuario1.png', 'abc@abc.com', '123456'),
(13, 'qwertyqwerty', 'images/usuario1.png', 'qwerty@qwerty.com', '123456');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones`
--

CREATE TABLE `publicaciones` (
  `idpublicacion` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `resumen` varchar(255) NOT NULL,
  `contenido` varchar(255) NOT NULL,
  `fecha_hora` datetime NOT NULL,
  `autor_id` int(11) NOT NULL,
  `votos` int(11) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `publicaciones`
--

INSERT INTO `publicaciones` (`idpublicacion`, `titulo`, `resumen`, `contenido`, `fecha_hora`, `autor_id`, `votos`, `foto`) VALUES
(7, 'titulo 121', 'resumen 123', 'contenido 142', '2021-04-07 17:58:16', 1, 71, '{}'),
(8, 'titulo 2', 'resumen 2', 'contenido 2', '2021-03-05 12:34:12', 1, 43, '{}'),
(9, 'titulo 3423', 'resumen 3423', 'contenido 352', '2021-04-07 17:58:15', 1, 89, '{}'),
(10, 'titulo 4', 'resumen 4', 'contenido 4', '2018-07-09 17:58:15', 1, 543, '{}'),
(11, 'titulo 5', 'resumen 5', 'contenido 5', '2020-09-21 12:54:12', 1, 32, '{}'),
(12, 'titulo 6', 'resumen 6', 'contenido 6', '2021-04-03 12:02:09', 1, 1, '{}'),
(13, 'fadsfsdf', 'jfdas', 'fda', '2021-04-10 14:10:10', 3, 0, '{}'),
(14, 'titulo 7', 'resumen 7', 'contenido 7', '2021-04-10 18:43:08', 1, 0, '{}'),
(20, 'Sherezade', 'Es una obra hecha por jaime martinez', 'tatata', '2021-04-11 11:00:31', 6, 0, '{}'),
(22, 'Z4K.', 'funciona', 'a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a ', '2021-04-11 12:51:22', 3, 0, '{}');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `autores`
--
ALTER TABLE `autores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`idpublicacion`),
  ADD KEY `autor_id` (`autor_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `autores`
--
ALTER TABLE `autores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `idpublicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD CONSTRAINT `autor_id` FOREIGN KEY (`autor_id`) REFERENCES `autores` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
