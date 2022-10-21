-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema la_vie
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema la_vie
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `la_vie` DEFAULT CHARACTER SET utf8 ;
USE `la_vie` ;

-- -----------------------------------------------------
-- Table `la_vie`.`psicologos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `la_vie`.`psicologos` (
  `id` INT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  `email` VARCHAR(100) NULL,
  `senha` VARCHAR(280) NULL,
  `apresentacao` LONGTEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `la_vie`.`pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `la_vie`.`pacientes` (
  `id` INT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  `email` VARCHAR(100) NULL,
  `data_nascimento` DATE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `la_vie`.`atendimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `la_vie`.`atendimentos` (
  `data_atendimento` DATE NULL,
  `observacoes` LONGTEXT NULL,
  `psicologos_id` INT NOT NULL,
  `pacientes_id` INT NOT NULL,
  INDEX `fk_atendimentos_psicologos_idx` (`psicologos_id` ASC) VISIBLE,
  INDEX `fk_atendimentos_pacientes1_idx` (`pacientes_id` ASC) VISIBLE,
  CONSTRAINT `fk_atendimentos_psicologos`
    FOREIGN KEY (`psicologos_id`)
    REFERENCES `la_vie`.`psicologos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_atendimentos_pacientes1`
    FOREIGN KEY (`pacientes_id`)
    REFERENCES `la_vie`.`pacientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
