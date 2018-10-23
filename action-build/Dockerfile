FROM node:8.12.0-alpine

LABEL "com.github.actions.name"="build"
LABEL "com.github.actions.description"="Build the project"
LABEL "com.github.actions.icon"="mic"
LABEL "com.github.actions.color"="blue"

LABEL "repository"="http://github.com/nshahm/paperspace"
LABEL "homepage"="http://github.com/actions"
LABEL "maintainer"="n.shahm@gmail.com"

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]