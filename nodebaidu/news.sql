-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:8889
-- Generation Time: Apr 28, 2017 at 02:39 AM
-- Server version: 5.6.34-log
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `newsType` char(200) NOT NULL,
  `newsTitle` varchar(200) NOT NULL,
  `newsImg` varchar(200) NOT NULL,
  `newsDate` datetime NOT NULL,
  `newsHot` char(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `newsType`, `newsTitle`, `newsImg`, `newsDate`, `newsHot`) VALUES
(6, '百家', '中国互联网有多牛？看完这张图你就明白了', 'img/new-item2.jpg', '2017-04-18 00:00:00', '热点'),
(7, '百家', '学自媒体到新媒源：自媒体月入上万的四种玩法', 'img/new-item3.jpg', '2017-04-20 00:00:00', ''),
(8, '本地', '闵鹿蕾：支持北京队重建 我合同问题属无中生有', 'img/new-item3.jpg', '2017-04-12 00:00:00', ''),
(9, '推荐', '揭秘 | 你在逃离北上广，美国人在逃离纽约旧金山', 'img/new-item4.jpg', '2017-04-20 00:00:00', '猜你喜欢'),
(24, '本地', '中国互联网有多牛？看完这张图你就明白了', 'img/new-item2.jpg', '2017-04-17 00:00:00', '热点'),
(25, '图片', '学自媒体到新媒源：自媒体月入上万的四种玩法', 'img/new-item3.jpg', '2017-04-19 00:00:00', ''),
(26, '图片', '闵鹿蕾：支持北京队重建 我合同问题属无中生有', 'img/new-item3.jpg', '2017-04-11 00:00:00', ''),
(27, '推荐', '揭秘 | 你在逃离北上广，美国人在逃离纽约旧金山', 'img/new-item4.jpg', '2017-04-20 00:00:00', '猜你喜欢'),
(28, '百家', '中国互联网有多牛？看完这张图你就明白了', 'img/new-item2.jpg', '2017-04-18 00:00:00', '热点'),
(30, '本地', '闵鹿蕾：支持北京队重建 我合同问题属无中生有', 'img/new-item3.jpg', '2017-04-12 00:00:00', ''),
(31, '图片', '揭秘 | 你在逃离北上广，美国人在逃离纽约旧金山', 'img/new-item4.jpg', '2017-04-19 00:00:00', '猜你喜欢'),
(32, '推荐', '中国互联网有多牛？看完这张图你就明白了', 'img/new-item2.jpg', '2017-04-18 00:00:00', '热点'),
(34, '推荐', '闵鹿蕾：支持北京队重建 我合同问题属无中生有', 'img/new-item3.jpg', '2017-04-11 00:00:00', ''),
(35, '百家', '揭秘 | 你在逃离北上广，美国人在逃离纽约旧金山', 'img/new-item4.jpg', '2017-04-19 00:00:00', '猜你喜欢');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=36;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
