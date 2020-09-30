-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 30, 2020 at 07:49 AM
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
-- Table structure for table `Customer`
--

CREATE TABLE `Customer` (
  `id` int(11) NOT NULL,
  `customerName` varchar(255) NOT NULL,
  `phoneNumber` int(11) NOT NULL,
  `fatherName` varchar(255) DEFAULT NULL,
  `accountNumber` varchar(255) DEFAULT NULL,
  `IFSCCode` varchar(255) DEFAULT NULL,
  `bankName` varchar(255) DEFAULT NULL,
  `villageName` varchar(255) DEFAULT NULL,
  `address` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Customer`
--

INSERT INTO `Customer` (`id`, `customerName`, `phoneNumber`, `fatherName`, `accountNumber`, `IFSCCode`, `bankName`, `villageName`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 'Customer Test', 78664465, 'Customer father name', '54567757564', 'dfgdgsr', 'Bank Name', 'Village Name', 'Address line', '2020-09-19 13:39:13', '2020-09-19 13:40:28'),
(3, 'Customer Test', 78664465, 'Customer father name', '54567757564', 'dfgdgsr', 'Bank Name', 'Village Name', 'Address line', '2020-09-19 13:51:43', '2020-09-19 13:51:43');

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
(1, 'test', '098f6bcd4621d373cade4e832627b4f6', 'surat', 'sumul', 'Sumul road', '8347583112', '2020-09-19 08:01:58', '2020-09-19 13:54:01'),
(3, 'test', '098f6bcd4621d373cade4e832627b4f6', 'surat', 'sumul', 'Sumul road', '83475831124', '2020-09-19 13:52:45', '2020-09-19 13:52:45'),
(4, 'test', '098f6bcd4621d373cade4e832627b4f6', 'surat', 'sumul', 'Sumul road', '8347581124', '2020-09-19 13:53:17', '2020-09-19 13:53:17');

-- --------------------------------------------------------

--
-- Table structure for table `LocalSale`
--

CREATE TABLE `LocalSale` (
  `id` int(11) NOT NULL,
  `animalType` varchar(255) NOT NULL,
  `liter` varchar(255) NOT NULL,
  `rate` varchar(255) NOT NULL,
  `totalAmount` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `saleDate` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `MilkCollection`
--

CREATE TABLE `MilkCollection` (
  `id` int(11) NOT NULL,
  `memberID` int(11) NOT NULL,
  `liter` varchar(255) NOT NULL,
  `fat` varchar(255) NOT NULL,
  `snf` varchar(255) NOT NULL,
  `rate` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `timeslot` varchar(255) NOT NULL,
  `animalType` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `addDate` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Customer`
--
ALTER TABLE `Customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Dairy`
--
ALTER TABLE `Dairy`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phoneNumber` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_2` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_3` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_4` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_5` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_6` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_7` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_8` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_9` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_10` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_11` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_12` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_13` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_14` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_15` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_16` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_17` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_18` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_19` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_20` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_21` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_22` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_23` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_24` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_25` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_26` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_27` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_28` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_29` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_30` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_31` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_32` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_33` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_34` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_35` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_36` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_37` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_38` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_39` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_40` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_41` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_42` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_43` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_44` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_45` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_46` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_47` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_48` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_49` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_50` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_51` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_52` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_53` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_54` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_55` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_56` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_57` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_58` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_59` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_60` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_61` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_62` (`phoneNumber`),
  ADD UNIQUE KEY `phoneNumber_63` (`phoneNumber`);

--
-- Indexes for table `LocalSale`
--
ALTER TABLE `LocalSale`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `MilkCollection`
--
ALTER TABLE `MilkCollection`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Customer`
--
ALTER TABLE `Customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Dairy`
--
ALTER TABLE `Dairy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
