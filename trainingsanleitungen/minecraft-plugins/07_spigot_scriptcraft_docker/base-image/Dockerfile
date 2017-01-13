FROM openjdk:7u111-jre

# Update packages and install prerequisites
RUN apt-get -y update \
    && apt-get -y install git

# Download and build spigotmc
RUN mkdir /tmp/spigotmc \
    && cd /tmp/spigotmc \
    && curl -o BuildTools.jar https://hub.spigotmc.org/jenkins/job/BuildTools/lastSuccessfulBuild/artifact/target/BuildTools.jar \
    && git config --global core.autocrlf false \ 
    && java -jar BuildTools.jar \
    && mkdir /bin/spigotmc \
    && mv *.jar /bin/spigotmc \
    && cd /bin/spigotmc \
    && rm -rf /tmp/spigotmc \
    && printf "#!/bin/sh\njava -Xms512M -Xmx1G -XX:MaxPermSize=128M -XX:+UseConcMarkSweepGC -jar /bin/spigotmc/" > /bin/spigotmc/start.sh \
    && ls spigot*.jar >> /bin/spigotmc/start.sh \
    && chmod +x /bin/spigotmc/start.sh \
    && printf "#%s\neula=true" "$(date)" > /bin/spigotmc/eula.txt

# Download and install scriptcraft plugin 
RUN cd /bin/spigotmc \
    && mkdir plugins \
    && mkdir -p /scriptcraft/plugins \
    && curl -o plugins/scriptcraft.jar https://scriptcraftjs.org/download/latest/scriptcraft-3.2.1/scriptcraft.jar

WORKDIR /bin/spigotmc

EXPOSE 25565

CMD ["/bin/spigotmc/start.sh"]
