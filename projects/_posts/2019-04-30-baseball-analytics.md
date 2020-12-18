---
layout: post
title: Predicting Major League Baseball Performance
description: Summary of my independent study presented to the undergraduate Statistics Department at the University of Virginia
categories: [posts, projects]
image: https://digital.bu.edu/wp-content/uploads/2017/05/Sabermetrics-1024x576-770x380.jpg
author: author1
noindex: true
---
The rise of sabermetrics in baseball, and the subsequent emergence of analytics across all sports, has redefined the sporting world and increased data-driven decisions. As an avid baseball fan and former player and coach myself, I am fascinated with how analytics can be used to predict player performance. 

# Predicting MLB Performance
## Project Description
Baseball is unique because it has seven professional levels through Minor League Baseball (MiLB) that serve as prerequisites to Major League Baseball (MLB). Moreover, there are over 30 rounds in the MLB draft while other sports have as few as two rounds. With thousands of prospects, it is a difficult task to evaluate performance and determine which minor leaguers will have the most success in the major leagues. Between making trades, acquiring players, and releasing athletes, it is essential for teams to know the potential value of each player. Baseball teams combine human scouts and analytics to evaluate players; however, this is not shared publicly. 

Public ranking systems, such as [MLB Pipeline](https://www.mlb.com/pipeline), attempt to grade minor leaguers based on their potential to succeed. Knowing the most highly regarded prospects helps fans, bookmakers, writers, players, and teams understand the present and future of the MLB. **Do these prospect "ranking" systems effectively offer more accurate predictions of major league performance than other player metrics?** Identifying top players before their emergence in the MLB provides a competitive advantage to teams who need to maximize player value. Using machine learning and other statistical tools on historical data may offer better predictions of player performance. Assembling better players creates stronger teams, which can boost ballpark attendance and increase revenue. More broadly, this research will focus on using historical minor league baseball performance predict major league performance. To answer these research questions, data collection, exploratory data analysis, and other statistical learning tools must be employed. 

## Data

Fortunately, professional baseball records are accessible and open source. The first major task of this project was to organize player batting and fielding records from both MLB and MiLB. [Retrosheet](http://retrosheet.org) contains all data on Major League Baseball players that can be read as a csv into any programming software.

The challenge for this research was obtaining extensive minor league data. While historical data on minor league baseball players (including their ranking from MLB Pipeline) since 1977 is available at the Baseball Cube, the cost led me to develop my own approach to gathering data about prospects. 

I scraped from various online sources using selenium and beautiful soup -- a slow, multi-day task necessary to obtain decades of data. Once I loaded the data, I merged minor leaguers' records with their major league counterparts and annual prospect ranking from MLB pipeline if applicable. I intentionally excluded active players so that I could create a model based on historical data and make predictions for current players.

## Statistical Methods

The following methods were employed in this independent study:
1. Summary statistics and exploratory data visualizations to describe the current prospect ranking system and its level of success in comparison to other metrics. 
2. Creation of a performance indicator to evaluate the performance of a player in the major leagues as well as players who do not make it to the top level.
3. Supervised machine learning tools to predict major league performance with and without prospect ranking systems. 

I would have loved to continued work on this project given more time and resources. My goal was to eventually apply sequential machine learning to this problem. A sequential model would take into account a crucial factor -- how a baseball prospect and the game itself changes over time. Perhaps a player has great potential early on in their career before an injury sets them off course. Capturing these sequential patterns may provide a better measure of the changing trajectory of a player.  

##  Outcomes

This independent study provides a tool that can evaluate minor league players and predict their level of success in the major leagues. Data collection, data manipulation, visualization, machine learning, and model evaluation were core tasks.
 
 I created a list of top prospects that MLB pipeline never ranked in their top 100 players. Hilariously, my model identified the college football standout Tim Tebow as a top unranked prospect.

I've embedded my final presentation that includes more detailed results **below.** 

<style>
.responsive-wrap iframe{ max-width: 100%;}
</style>
<div class="responsive-wrap">
<!-- this is the embed code provided by Google -->
	<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTnV1MYvz9RffVzokitb-5YYNFU_yb7VWR3kQ8J4pgYgmXe0NRamzUzGVz3RLttDnzb2UaLIW4o42Sx/embed?start=false&loop=false&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe><!-- Google embed ends -->
</div>


**Please reach out if you have any comments or questions. I would happily share more details of my work, or just talk baseball with you!**

