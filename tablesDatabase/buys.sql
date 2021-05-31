-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-05-2021 a las 07:50:55
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `electrom`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buys`
--

CREATE TABLE `buys` (
  `id` int(11) NOT NULL,
  `idProduct` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `total` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `buys`
--

INSERT INTO `buys` (`id`, `idProduct`, `name`, `brand`, `price`, `stock`, `amount`, `total`, `createdAt`, `updatedAt`) VALUES
(1, 7, 'Blue Headphones', 'Unikuma', 1500, 64, 2, 3000, '2021-05-31 05:48:06', '2021-05-31 05:49:57'),
(2, 1, 'Laptop', 'Toshiba', 9000, 24, 1, 9000, '2021-05-31 05:41:17', '2021-05-31 05:50:16');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `buys`
--
ALTER TABLE `buys`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `buys`
--
ALTER TABLE `buys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
