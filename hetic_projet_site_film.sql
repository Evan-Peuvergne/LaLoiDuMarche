-- phpMyAdmin SQL Dump
-- version 4.4.1.1
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Jun 01, 2015 at 02:37 AM
-- Server version: 5.5.42
-- PHP Version: 5.6.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hetic_projet_site_film`
--

-- --------------------------------------------------------

--
-- Table structure for table `actors`
--

CREATE TABLE `actors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `twitter` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `actors`
--

INSERT INTO `actors` (`id`, `name`, `role`, `image`, `twitter`) VALUES
(1, 'Vincent Lindon', 'Thierry', 'kb9pmof7tovsmtbafrny.jpg', NULL),
(2, 'Xavier Mathieu', 'Le collègue syndicaliste', '1nspq3qj6tzmbvm8u0zk.jpg', NULL),
(3, 'Stéphane Brizé', 'Réalisateur', '04uor8auuq1ybx4vihzp.jpg', NULL),
(4, 'Olivier Gorce', 'Scénariste', 'nyd4aj1bkxnmxixt9tpa.jpg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `informations`
--

CREATE TABLE `informations` (
  `id` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `informations`
--

INSERT INTO `informations` (`id`, `title`, `value`) VALUES
(1, 'Date de sortie', '19 mai 2015'),
(2, 'Durée', '1h33'),
(4, 'Genre', 'Drame'),
(5, 'Nationnalité', 'Français'),
(6, 'Réalisation', 'Stéphane Brizé'),
(7, 'Scénario', 'Stéphane Brizé & Olivier Gorce');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `created` date NOT NULL,
  `views` int(11) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `created`, `views`, `content`, `image`) VALUES
(1, 'Critics feedbacks', '2015-05-29', 24, '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel augue pharetra, maximus sapien vel, fringilla libero. Quisque molestie, mi ac dictum semper, mi felis interdum augue, quis tempus ex erat ut libero. Etiam nec rhoncus libero. Nulla vel tellus vel nisl tempor cursus. Quisque sit amet placerat erat. Nunc ultrices, ex nec tempus condimentum, sapien turpis bibendum augue, quis pretium arcu nunc vitae urna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent id ante sodales, commodo lorem ut, pulvinar tortor. Donec ut elit id tortor viverra aliquam. Cras quam enim, aliquam quis pharetra eget, vulputate quis metus. Fusce quam nibh, condimentum ut mauris vitae, rutrum egestas dui.</p>\r\n<div class="article-photo">\r\n<img src="http://i.huffpost.com/gen/1611402/images/o-LIBERATION-facebook.jpg" alt="">\r\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero alias molestiae cumque</p>\r\n</div>\r\n<p>Etiam posuere arcu lacus. Pellentesque ac risus felis. Nullam vehicula tincidunt lectus, a mollis dolor laoreet vitae. Suspendisse at massa ut tellus ornare faucibus eu ut quam. Nunc sit amet libero ac nisl bibendum consequat ac ac ex. Vivamus ultrices euismod risus, sed pharetra dolor. Sed interdum magna at augue suscipit, vel molestie elit mollis. Morbi ut neque tempus, sagittis metus eget, tempor neque.</p>\r\n<p>Aenean metus quam, varius quis ultricies id, rutrum non ipsum. Vivamus ligula leo, dapibus et elementum et, vestibulum sit amet urna. Ut nibh felis, tristique nec mauris in, pellentesque imperdiet massa. Nullam eu cursus nibh. Etiam sed porta lorem. Vestibulum eget massa sit amet est mattis pharetra. Curabitur quis egestas libero. Sed fringilla in erat vitae condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum blandit hendrerit nisl vel vestibulum. Sed non turpis felis. Pellentesque bibendum sodales posuere. Pellentesque eleifend, purus eget consectetur volutpat, quam augue tristique orci, sit amet ornare sapien leo a orci.</p>', 'x40dcbev033gkqio2xyc.jpg'),
(3, 'Vincent Lindon, best actor award at Cannes', '2015-05-23', 11, '<p>Curabitur commodo eros at varius mattis. Fusce cursus, mauris sed facilisis scelerisque, odio libero varius massa, eget porta nisl ipsum nec elit. Fusce vitae efficitur mi. Maecenas varius sapien et augue posuere faucibus ut vitae augue. Nulla facilisi. Proin venenatis quam at dui lacinia porta. Vestibulum iaculis finibus nibh, ut fermentum sem aliquet a. Nam mattis ornare vulputate. Aliquam sed risus quis eros elementum tristique tempus eget tortor. Quisque pulvinar elit vel sapien ultricies interdum. Sed ut velit commodo, varius ante vel, viverra quam. Integer vulputate nibh non lacus euismod, scelerisque egestas diam vulputate. Donec eget ligula malesuada, maximus ipsum et, tincidunt diam. In accumsan ante vel suscipit faucibus.</p>\r\n<div class="article-photo">\r\n<img src="http://img.bfmtv.com/c/1256/708/aff/ec27543133265b9e6349ba51f394b.jpg"/>\r\n<p>L''émotion a submergé l''acteur au moment de monter sur scène</p>\r\n</div>\r\n<p>Proin at neque sed augue sollicitudin accumsan. Sed id sem non felis iaculis pulvinar in in quam. Sed id volutpat lectus. Etiam laoreet urna in sem auctor vestibulum. Curabitur posuere, ante non rhoncus mattis, nisl tortor tincidunt nunc, ac iaculis neque nulla nec enim. Sed nec quam ac metus efficitur tempor. Morbi dictum non ipsum sit amet porta. Phasellus volutpat pellentesque enim vel faucibus. Praesent lobortis sem velit. Donec metus nulla, molestie in ex in, vulputate accumsan lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>\r\n<p>Etiam posuere arcu lacus. Pellentesque ac risus felis. Nullam vehicula tincidunt lectus, a mollis dolor laoreet vitae. Suspendisse at massa ut tellus ornare faucibus eu ut quam. Nunc sit amet libero ac nisl bibendum consequat ac ac ex. Vivamus ultrices euismod risus, sed pharetra dolor. Sed interdum magna at augue suscipit, vel molestie elit mollis. Morbi ut neque tempus, sagittis metus eget, tempor neque.</p>\r\n<div class="article-photo">\r\n<img src="http://cache.20minutes.fr/photos/2015/04/16/mandatory-credit-photo-by-rex-c771-diaporama.jpg"/>\r\n<p>Les pronostics donnaient l''acteur français gagnant depuis plusieurs jours</p>\r\n</div>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel augue pharetra, maximus sapien vel, fringilla libero. Quisque molestie, mi ac dictum semper, mi felis interdum augue, quis tempus ex erat ut libero. Etiam nec rhoncus libero. Nulla vel tellus vel nisl tempor cursus. Quisque sit amet placerat erat. Nunc ultrices, ex nec tempus condimentum, sapien turpis bibendum augue, quis pretium arcu nunc vitae urna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent id ante sodales, commodo lorem ut, pulvinar tortor. Donec ut elit id tortor viverra aliquam. Cras quam enim, aliquam quis pharetra eget, vulputate quis metus. Fusce quam nibh, condimentum ut mauris vitae, rutrum egestas dui.</p>', 'shxntell0n4lr392o0a5.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `photos`
--

INSERT INTO `photos` (`id`, `url`) VALUES
(2, '2vz3dnthpzyhaeespv9i.jpg'),
(3, 'dajdqi7jt26kvf57w00p.jpg'),
(4, 'lbamc8dxdofeloq6v69r.jpg'),
(5, 'kl7h4wluin8u570ti10n.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `responses`
--

CREATE TABLE `responses` (
  `id` int(11) NOT NULL,
  `facebook_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created` date NOT NULL,
  `review_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `responses`
--

INSERT INTO `responses` (`id`, `facebook_id`, `name`, `content`, `created`, `review_id`) VALUES
(1, '10206054668840078', 'Evan Peuvergne', 'Ce film est vraiment super cool', '2015-06-01', 1),
(2, '10206054668840078', 'Evan Peuvergne', 'Ceci est un  commentaire ', '2015-06-01', 2),
(3, '10206054668840078', 'Evan Peuvergne', 'Critique sévère autant qu''inutile', '2015-06-01', 9),
(13, '10206054668840078', 'Evan Peuvergne', 'Très joli critique, dans la veine du film d''ailleurs', '2015-06-01', 1);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `note` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `content` text NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `name`, `note`, `image`, `facebook`, `content`, `created`) VALUES
(1, 'Pascal Mérigeau ', 5, '716l65143eyk355t9szy.jpg', NULL, 'Stéphane Brizé a réalisé un film à nul autre pareil, moderne, puissant, engagé (...). Pour dire la vie telle qu’elle est, il n’y a que le cinéma, ce cinéma-là plus encore que les autres, quand un Brizé, un Lindon, des inconnus inoubliables s’en emparent.', '2015-05-28'),
(2, 'Eric Libiot', 5, 'lzf7p8mliwmh4345qlq2.jpg', NULL, 'Bientôt l''émotion gagne. Bientôt, la dureté du bitume fait mal. Derrière l''écran, la rage. (...) Un film social et fort, en compétition à Cannes, avec un Vincent Lindon extraordinaire.', '2015-05-26'),
(3, 'Christophe Narbonne', 4, 'mdoy9fiwea8lon9ht564.jpg', NULL, 'Brizé traque le romanesque derrière les situations les plus banales qui soient, faisant à la fois de Thierry un héros du quotidien et le miroir d’une société gangrenée par le chômage de masse et l’individualisme galopant.', '2015-05-19'),
(5, 'Chris Huby', 3, 'm3qwygpsy21x3ri5zcgu.jpeg', NULL, 'Brizé livre ici un long métrage d’une facture classique mais qui fonctionne parfaitement.', '2015-05-20'),
(6, 'Serge Kaganski', 3, 'cjp7x4pax3m4wrc4ko7d.jpeg', NULL, 'On se dit qu’il y a, là aussi, une justesse, une synchronicité heureuse entre le film, sa forme, son sujet et la façon dont il a été fabriqué.', '2015-05-29'),
(7, 'Joachim Lepastier', 1, 'faj8et2339uoatnivx84.jpg', NULL, 'Comme ses personnages ne cessent de négocier, marchander ou chaparder, Brizé aussi finit par chaparder avec sa caméra braquée sur une « humanité ordinaire » espérant, avec cette arme disproportionnée et au prix de divers dispositifs d’humiliation à petit feu, recueillir quelques miettes de dignité dans ce monde sans pitié. Bien peu pour nourrir une œuvre de résistance, encore moins de combat. ', '2015-05-31'),
(9, 'Théo Ribeton', 1, '7sun51qcu8qfxkfquhfo.jpeg', NULL, 'Il y a quelque chose des "Délits flagrants" de Raymond Depardon, mais Brizé achève alors surtout de démontrer son obsession infecte pour les scènes d’humiliation, ces avilissements dont il se plait à faire l’exhibition, et qui n’ont rien d’une main tendue à la condition prolétaire, bien au contraire (...).', '2015-05-03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actors`
--
ALTER TABLE `actors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `informations`
--
ALTER TABLE `informations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD KEY `title` (`title`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `responses`
--
ALTER TABLE `responses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actors`
--
ALTER TABLE `actors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `informations`
--
ALTER TABLE `informations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `responses`
--
ALTER TABLE `responses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
