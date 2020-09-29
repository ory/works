
import base64
import os
import re

from github import Github

# A quick and dirty script to print the list of contributors to a github repo 

g = Github("access_token")      #access_token is your personal github access token (https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)   
repo = g.get_repo("ory/kratos")                             #the repo you want to look at 
reponame = repo.name                                        #the repositories name
stars = repo.stargazers_count                               #the number of stars the repo has
print('Repository',reponame,'got starred',stars,'times')    
print('A list of contributors ranked by number of contributions')

i=0
contributors = repo.get_contributors()                      #cycle through contributors and print with link to profile
for contributor in contributors:
    i=i+1
    name=contributor.name
    url=contributor.html_url
    print(i,name,url)
    
print('Number of contributors=',i)