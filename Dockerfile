FROM ubuntu:16.04
MAINTAINER Ryan P. Kelly <rpkelly22@gmail.com>

LABEL description="resume"

RUN locale-gen en_US.UTF-8  
ENV LANG en_US.UTF-8  
ENV LANGUAGE en_US:en  
ENV LC_ALL en_US.UTF-8  

RUN apt-get update -y && apt-get install -y sudo python3-flask fontconfig curl bzip2

RUN curl -L https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2 \
    | tar -xjf - phantomjs-2.1.1-linux-x86_64/bin/phantomjs -O > /usr/bin/phantomjs && chmod +x /usr/bin/phantomjs

RUN adduser --system resume

RUN mkdir -p /usr/lib/resume.ryankelly.us/build/
COPY build/* /usr/lib/resume.ryankelly.us/build/

RUN mkdir -p /usr/lib/resume.ryankelly.us/server/
COPY server/* /usr/lib/resume.ryankelly.us/server/
COPY start.sh /usr/lib/resume.ryankelly.us/start.sh

EXPOSE 8080

CMD ["sudo", "-u", "resume", "sh", "/usr/lib/resume.ryankelly.us/start.sh"]
#CMD bash
