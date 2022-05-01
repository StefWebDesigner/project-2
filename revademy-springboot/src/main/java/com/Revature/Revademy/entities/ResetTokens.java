package com.Revature.Revademy.entities;

import javax.persistence.*;


@Entity
@Table(name = "ResetTokensModel")
public class ResetTokens {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer tokenId;
	private String email;
	private String token;
	
	public ResetTokens() {
	}

	public ResetTokens(String email, String token) {
		this.email = email;
		this.token = token;
	}

	public Integer getTokenId() {
		return tokenId;
	}

	public void setTokenId(Integer tokenId) {
		this.tokenId = tokenId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
	
	
	
	
	

}
