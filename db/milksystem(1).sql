-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 29, 2021 at 02:14 PM
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

--
-- Dumping data for table `Admin`
--

INSERT INTO `Admin` (`id`, `userName`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin@123', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Customer`
--

CREATE TABLE `Customer` (
  `id` int(11) NOT NULL,
  `customerName` varchar(255) NOT NULL,
  `memberCode` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `fatherName` varchar(255) DEFAULT NULL,
  `accountNumber` varchar(255) DEFAULT NULL,
  `IFSCCode` varchar(255) DEFAULT NULL,
  `bankName` varchar(255) DEFAULT NULL,
  `villageName` varchar(255) DEFAULT NULL,
  `address` text,
  `memberType` varchar(255) NOT NULL,
  `customer_name_hindi` varchar(255) NOT NULL,
  `local_milk_sale_rate_for_buffalo` varchar(255) DEFAULT NULL,
  `local_milk_sale_rate_for_cow` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `DairyId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `liter_pd` varchar(255) NOT NULL,
  `fat_pd` varchar(255) NOT NULL,
  `gov_pd` varchar(255) NOT NULL,
  `total_rate_with_pd` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `CustomerId` int(11) DEFAULT NULL,
  `DairyId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Customer`
--
ALTER TABLE `Customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Dairy`
--
ALTER TABLE `Dairy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `LocalSale`
--
ALTER TABLE `LocalSale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `MilkCollection`
--
ALTER TABLE `MilkCollection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
