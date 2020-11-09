-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2020 at 05:36 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `milksystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `Admin`
--

CREATE TABLE `Admin` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Customer`
--

CREATE TABLE `Customer` (
  `id` int(11) NOT NULL,
  `customerName` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `fatherName` varchar(255) DEFAULT NULL,
  `accountNumber` varchar(255) DEFAULT NULL,
  `IFSCCode` varchar(255) DEFAULT NULL,
  `bankName` varchar(255) DEFAULT NULL,
  `villageName` varchar(255) DEFAULT NULL,
  `address` text,
  `memberType` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `DairyId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Customer`
--

INSERT INTO `Customer` (`id`, `customerName`, `phoneNumber`, `fatherName`, `accountNumber`, `IFSCCode`, `bankName`, `villageName`, `address`, `memberType`, `createdAt`, `updatedAt`, `DairyId`) VALUES
(2, 'Customer Test', '784664125', 'Customer father name', '54567757564', 'dfgdgsr', 'Bank Name', 'Village Name', 'Address line', 'buyer', '2020-11-07 05:36:29', '2020-11-07 05:36:29', 1);

-- --------------------------------------------------------

--
-- Table structure for table `Dairy`
--

CREATE TABLE `Dairy` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `centerName` varchar(255) NOT NULL,
  `dairyName` varchar(255) NOT NULL,
  `dairyAddress` text NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Dairy`
--

INSERT INTO `Dairy` (`id`, `userName`, `password`, `centerName`, `dairyName`, `dairyAddress`, `phoneNumber`, `createdAt`, `updatedAt`) VALUES
(1, 'sanket', '81c6fa745434534c4a9633ad8c08506a', 'surat', 'sumul', 'Sumul road', '8347583112', '2020-11-07 05:35:07', '2020-11-07 05:35:07');

-- --------------------------------------------------------

--
-- Table structure for table `LocalSale`
--

CREATE TABLE `LocalSale` (
  `id` int(11) NOT NULL,
  `saleDate` varchar(255) NOT NULL,
  `timeslot` varchar(255) NOT NULL,
  `animalType` varchar(255) NOT NULL,
  `liter` varchar(255) NOT NULL,
  `rate` varchar(255) NOT NULL,
  `totalAmount` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `DairyId` int(11) DEFAULT NULL,
  `CustomerId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `LocalSale`
--

INSERT INTO `LocalSale` (`id`, `saleDate`, `timeslot`, `animalType`, `liter`, `rate`, `totalAmount`, `createdAt`, `updatedAt`, `DairyId`, `CustomerId`) VALUES
(2, 'current Date', 'morning', 'animal type', '23', '23', '2314', '2020-11-07 05:38:30', '2020-11-07 05:38:30', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `MilkCollection`
--

CREATE TABLE `MilkCollection` (
  `id` int(11) NOT NULL,
  `liter` varchar(255) NOT NULL,
  `fat` varchar(255) NOT NULL,
  `snf` varchar(255) NOT NULL,
  `rate` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `addDate` varchar(255) NOT NULL,
  `timeslot` varchar(255) NOT NULL,
  `animalType` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `CustomerId` int(11) DEFAULT NULL,
  `DairyId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `MilkCollection`
--

INSERT INTO `MilkCollection` (`id`, `liter`, `fat`, `snf`, `rate`, `amount`, `addDate`, `timeslot`, `animalType`, `createdAt`, `updatedAt`, `CustomerId`, `DairyId`) VALUES
(1, '1.2', '23', 'cd34', '65', '3252', '09-09-2020', 'morning', 'cow', '2020-11-07 06:01:48', '2020-11-07 06:01:48', 2, 1),
(2, '1.2', '23', 'cd34', '65', '3252', '10-09-2020', 'morning', 'cow', '2020-11-07 06:12:05', '2020-11-07 06:12:05', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Payment`
--

CREATE TABLE `Payment` (
  `id` int(11) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `paymentDate` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `CustomerId` int(11) DEFAULT NULL,
  `DairyId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Admin`
--
ALTER TABLE `Admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Customer`
--
ALTER TABLE `Customer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phoneNumber` (`phoneNumber`),
  ADD KEY `DairyId` (`DairyId`);

--
-- Indexes for table `Dairy`
--
ALTER TABLE `Dairy`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userName` (`userName`),
  ADD UNIQUE KEY `phoneNumber` (`phoneNumber`);

--
-- Indexes for table `LocalSale`
--
ALTER TABLE `LocalSale`
  ADD PRIMARY KEY (`id`),
  ADD KEY `DairyId` (`DairyId`),
  ADD KEY `CustomerId` (`CustomerId`);

--
-- Indexes for table `MilkCollection`
--
ALTER TABLE `MilkCollection`
  ADD PRIMARY KEY (`id`),
  ADD KEY `CustomerId` (`CustomerId`),
  ADD KEY `DairyId` (`DairyId`);

--
-- Indexes for table `Payment`
--
ALTER TABLE `Payment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `CustomerId` (`CustomerId`),
  ADD KEY `DairyId` (`DairyId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Admin`
--
ALTER TABLE `Admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Customer`
--
ALTER TABLE `Customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Dairy`
--
ALTER TABLE `Dairy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `LocalSale`
--
ALTER TABLE `LocalSale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `MilkCollection`
--
ALTER TABLE `MilkCollection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Payment`
--
ALTER TABLE `Payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Customer`
--
ALTER TABLE `Customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`DairyId`) REFERENCES `Dairy` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `LocalSale`
--
ALTER TABLE `LocalSale`
  ADD CONSTRAINT `localsale_ibfk_1` FOREIGN KEY (`DairyId`) REFERENCES `Dairy` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `localsale_ibfk_2` FOREIGN KEY (`CustomerId`) REFERENCES `Customer` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `MilkCollection`
--
ALTER TABLE `MilkCollection`
  ADD CONSTRAINT `milkcollection_ibfk_1` FOREIGN KEY (`CustomerId`) REFERENCES `Customer` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `milkcollection_ibfk_2` FOREIGN KEY (`DairyId`) REFERENCES `Dairy` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Payment`
--
ALTER TABLE `Payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`CustomerId`) REFERENCES `Customer` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`DairyId`) REFERENCES `Dairy` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
