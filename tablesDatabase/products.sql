-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-05-2021 a las 07:51:16
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
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `destroyTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `brand`, `price`, `stock`, `image`, `createdAt`, `updatedAt`, `destroyTime`) VALUES
(1, 'Laptop', 'Toshiba', 9000, 23, 'https://www.youfeelm.com/wp-content/uploads/2019/09/Mejor-laptop-y-laptop-toshiba-blanco-Revisi%C3%B3n-Prueba.jpg', '2021-05-31 05:41:17', '2021-05-31 05:50:16', NULL),
(2, 'Iphone', 'Apple', 10000, 34, 'https://i.blogs.es/3ae6db/iphone-12-pro-max-00-01/1366_2000.jpg', '2021-05-31 05:42:01', '2021-05-31 05:42:01', NULL),
(3, 'Red HeadPhones', 'Kamewar', 700, 100, 'https://5.imimg.com/data5/RS/VR/GM/SELLER-29296573/bluetooth-headphones-500x500.jpg', '2021-05-31 05:43:00', '2021-05-31 05:43:00', NULL),
(4, 'Tablet', 'Huawei', 4500, 70, 'https://cdn1.coppel.com/images/catalog/pm/2824873-1.jpg', '2021-05-31 05:45:11', '2021-05-31 05:45:11', NULL),
(5, 'Cellphone', 'LG', 5000, 80, 'https://media.airedesantafe.com.ar/p/834508665d3afd41e8aae54694cf6742/adjuntos/268/imagenes/002/382/0002382788/celular-lg.jpg', '2021-05-31 05:46:06', '2021-05-31 05:46:06', NULL),
(6, 'Mouse gamer', 'Razer', 1500, 120, 'https://images-na.ssl-images-amazon.com/images/I/710uCJC9mTL._AC_SY450_.jpg', '2021-05-31 05:47:13', '2021-05-31 05:47:13', NULL),
(7, 'Blue Headphones', 'Unikuma', 1500, 62, 'https://www.powerplanetonline.com/cdnassets/onikuma_k1_b_azul_auriculares_gaming_01_l.jpg', '2021-05-31 05:48:06', '2021-05-31 05:49:57', NULL),
(8, 'Microphone', 'ATR', 500, 150, 'https://cloud.audio-technica.com/media/catalog/product/cache/8dd197211b5cade13ef7fc9815610330/a/t/atr1300x_01.png', '2021-05-31 05:48:56', '2021-05-31 05:48:56', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
