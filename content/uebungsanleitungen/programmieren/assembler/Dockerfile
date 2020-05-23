FROM ubuntu

# Install prerequisites
RUN apt-get update
RUN apt-get install -qqy build-essential gdb libc6-dev-i386 curl git vim

# Install NASM
RUN curl --output nasm-2.12.02.tar.gz http://www.nasm.us/pub/nasm/releasebuilds/2.12.02/nasm-2.12.02.tar.gz && \
    tar -xzf nasm-2.12.02.tar.gz --directory /usr/local/src && \
    cd /usr/local/src/nasm-2.12.02/ && \
    ./configure && \
    make && \
    make install && \
    cp nasm.1 /usr/local/man/man1 && \
    cp ndisasm.1 /usr/local/man/man1

# Configure vim
RUN mkdir -p ~/.vim/syntax && \
    curl https://raw.githubusercontent.com/Shirk/vim-gas/master/syntax/gas.vim -o ~/.vim/syntax/gas.vim && \
    mkdir -p ~/.vim/ftdetect && \
    echo "au BufRead,BufNewFile *.asm set syntax=gas" > ~/.vim/ftdetect/mine.vim

RUN mkdir /src
COPY ./assembler-hello-world /src