-- Adminer 4.8.1 MySQL 8.3.0 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `access_tokens`;
CREATE TABLE `access_tokens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `admin_id` int NOT NULL,
  `token` varchar(255) NOT NULL,
  `expiry_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `access_tokens_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `access_tokens` (`id`, `admin_id`, `token`, `expiry_at`) VALUES
(1,	1,	'992b132d0795026b644ecb8e551165b6ce09352abb00a7c473c920cba8c57ad1',	'2024-08-13 09:54:42'),
(2,	1,	'8cde00cd6ad6cdd71653254f0b885871a1c67ccd905238adb177f64b88e3ac17',	'2024-08-13 09:54:46'),
(3,	1,	'a8b507e23c5851ef0a1c8fb68728ff334450d6720117c252a8be993434be7933',	'2024-08-13 09:54:48'),
(4,	1,	'f934ddf126ca98c70ed4253c0e5da1a286c8bdd9864d43dc3773f950f4935e48',	'2024-08-13 09:55:11'),
(5,	1,	'8b409cf9d547765846b239bbaa1488339c508a3106595d13c369d68aaa23dbeb',	'2024-08-13 12:19:20'),
(6,	1,	'960820f97c55949770a3200cd9764aa78454d40207e5df0e26d56d0bbc36a24f',	'2024-08-13 13:37:30'),
(7,	1,	'c485957857a0394073ae4de7b385dc7389d05c2ae71902e6286fa5e65d1006d9',	'2024-08-13 13:51:02');

DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1,	'admin',	'password');

DROP TABLE IF EXISTS `topic_cards`;
CREATE TABLE `topic_cards` (
  `id` int NOT NULL AUTO_INCREMENT,
  `topic_id` int NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer` varchar(400) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `topic_id` (`topic_id`),
  CONSTRAINT `topic_cards_ibfk_1` FOREIGN KEY (`topic_id`) REFERENCES `topics` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `topic_cards` (`id`, `topic_id`, `question`, `answer`) VALUES
(3,	1,	'What is phishing?',	'A type of cyber attack where attackers trick users into providing sensitive information.'),
(4,	1,	'What is a firewall?',	'A security device that monitors and controls incoming and outgoing network traffic.'),
(5,	1,	'What is two-factor authentication (2FA)?',	'An extra layer of security requiring two forms of verification to access an account.'),
(6,	1,	'What is ransomware?',	'Malware that encrypts data and demands payment for decryption.'),
(7,	1,	'What does SSL stand for?',	'Secure Sockets Layer, a protocol for encrypting data between a web server and a browser.'),
(8,	1,	'What is social engineering?',	'Manipulating people into divulging confidential information.'),
(9,	1,	'What is a DDoS attack?',	'Distributed Denial of Service; an attack that overwhelms a service with traffic to make it unavailable.'),
(10,	1,	'What is encryption?',	'The process of converting data into a code to prevent unauthorized access.'),
(11,	1,	'What is a VPN?',	'Virtual Private Network; it creates a secure connection over the internet.'),
(12,	1,	'What is malware?',	'Malicious software designed to harm, exploit, or otherwise compromise a system.'),
(13,	2,	'What is HTML?',	'Hypertext Markup Language, the standard markup language for creating web pages.'),
(14,	2,	'What is CSS?',	'Cascading Style Sheets, used to style HTML elements.'),
(15,	2,	'What is JavaScript?',	'A programming language that allows you to implement complex features on web pages.'),
(16,	2,	'What is React?',	'A JavaScript library for building user interfaces.'),
(17,	2,	'What is a component in React?',	'A reusable piece of UI that can be used independently in different parts of an application.'),
(18,	2,	'What is the DOM?',	'Document Object Model, a programming interface for web documents.'),
(19,	2,	'What is responsive design?',	'A design approach that makes web content look good on all devices.'),
(20,	2,	'What is a CSS grid?',	'A layout system for creating complex web layouts easily.'),
(21,	2,	'What is JSX?',	'JavaScript XML, a syntax extension for React that allows HTML to be written within JavaScript.'),
(22,	2,	'What is state in React?',	'An object that determines how a component renders and behaves.'),
(23,	3,	'What is an array?',	'A collection of items stored at contiguous memory locations.'),
(24,	3,	'What is a linked list?',	'A linear data structure where elements are stored in nodes and each node points to the next.'),
(25,	3,	'What is a stack?',	'A linear data structure that follows the LIFO (Last In, First Out) principle.'),
(26,	3,	'What is a queue?',	'A linear data structure that follows the FIFO (First In, First Out) principle.'),
(27,	3,	'What is a binary tree?',	'A tree data structure where each node has at most two children.'),
(28,	3,	'What is a hash table?',	'A data structure that maps keys to values for efficient data retrieval.'),
(29,	3,	'What is a graph?',	'A data structure consisting of nodes connected by edges.'),
(30,	3,	'What is recursion?',	'A method where a function calls itself to solve a problem.'),
(31,	3,	'What is a heap?',	'A specialized tree-based data structure that satisfies the heap property.'),
(32,	3,	'What is a binary search?',	'A search algorithm that finds the position of a target value within a sorted array.'),
(33,	4,	'What is an IP address?',	'A unique address that identifies a device on the internet or local network.'),
(34,	4,	'What is DNS?',	'Domain Name System; it translates domain names into IP addresses.'),
(35,	4,	'What is a router?',	'A device that forwards data packets between computer networks.'),
(36,	4,	'What is TCP/IP?',	'Transmission Control Protocol/Internet Protocol, the suite of communication protocols used to connect devices on the internet.'),
(37,	4,	'What is HTTP?',	'Hypertext Transfer Protocol, the foundation of data communication on the web.'),
(38,	4,	'What is a subnet mask?',	'A 32-bit number that divides an IP address into network and host parts.'),
(39,	4,	'What is a VPN?',	'Virtual Private Network; it extends a private network across a public network.'),
(40,	4,	'What is bandwidth?',	'The maximum rate of data transfer across a network path.'),
(41,	4,	'What is a MAC address?',	'Media Access Control address, a unique identifier assigned to network interfaces.'),
(42,	4,	'What is DHCP?',	'Dynamic Host Configuration Protocol, it assigns IP addresses to devices on a network.'),
(43,	5,	'What is REST?',	'Representational State Transfer, a web service architectural style.'),
(44,	5,	'What is CRUD?',	'Create, Read, Update, Delete; the basic operations of persistent storage.'),
(45,	5,	'What is an API?',	' Application Programming Interface; a set of rules for building and interacting with software applications.'),
(46,	5,	'What is Node.js?',	'A JavaScript runtime built on Chrome\'s V8 engine for server-side development.'),
(47,	5,	'What is middleware?',	'Software that connects different components or services in an application.'),
(48,	5,	'What is a database migration?',	'The process of moving data from one database to another.'),
(49,	5,	'What is an ORM?',	'Object-Relational Mapping, a technique for converting data between incompatible systems.'),
(50,	5,	'What is session management?',	'The process of securely handling user sessions in web applications.'),
(51,	5,	'What is a microservice?',	'An architectural style where an application is structured as a collection of small, independent services.'),
(52,	5,	'What is caching?',	'Storing copies of data in a temporary storage location for quick access.');

DROP TABLE IF EXISTS `topics`;
CREATE TABLE `topics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `topics` (`id`, `name`) VALUES
(5,	'Backend'),
(1,	'cybsersescurity'),
(3,	'Data Structures'),
(2,	'Frontend'),
(4,	'Networking');

-- 2024-08-13 11:57:16