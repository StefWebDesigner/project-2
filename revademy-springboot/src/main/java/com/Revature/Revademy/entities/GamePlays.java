package com.Revature.Revademy.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="GamePlaysModel")
public class GamePlays {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Integer playsId;
	private Integer hangmanPlays;
	private Integer matchingPlays;
	private Integer soundQuizPlays;
	private Integer colorQuizPlays;
	private Integer animalQuizPlays;
	
	public Integer getPlaysId() {
		return playsId;
	}
	public void setPlaysId(Integer playsId) {
		this.playsId = playsId;
	}
	public Integer getHangmanPlays() {
		return hangmanPlays;
	}
	public void setHangmanPlays(Integer hangmanPlays) {
		this.hangmanPlays = hangmanPlays;
	}
	public Integer getMatchingPlays() {
		return matchingPlays;
	}
	public void setMatchingPlays(Integer matchingPlays) {
		this.matchingPlays = matchingPlays;
	}
	public Integer getSoundQuizPlays() {
		return soundQuizPlays;
	}
	public void setSoundQuizPlays(Integer soundQuizPlays) {
		this.soundQuizPlays = soundQuizPlays;
	}
	public Integer getColorQuizPlays() {
		return colorQuizPlays;
	}
	public void setColorQuizPlays(Integer colorQuizPlays) {
		this.colorQuizPlays = colorQuizPlays;
	}
	public Integer getAnimalQuizPlays() {
		return animalQuizPlays;
	}
	public void setAnimalQuizPlays(Integer animalQuizPlays) {
		this.animalQuizPlays = animalQuizPlays;
	}
	

	 
	 
}
