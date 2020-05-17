# Install prerequisites
sudo apt-get update
sudo apt-get install -qqy build-essential gdb libc6-dev-i386 curl git

# Install NASM
curl --output nasm-2.12.02.tar.gz http://www.nasm.us/pub/nasm/releasebuilds/2.12.02/nasm-2.12.02.tar.gz
sudo tar -xzf nasm-2.12.02.tar.gz --directory /usr/local/src
cd /usr/local/src/nasm-2.12.02/
sudo ./configure
sudo make
sudo make install
sudo cp nasm.1 /usr/local/man/man1
sudo cp ndisasm.1 /usr/local/man/man1

# Configure vim (syntax highlighting for .asm files)
mkdir -p ~/.vim/syntax
curl https://raw.githubusercontent.com/Shirk/vim-gas/master/syntax/gas.vim -o ~/.vim/syntax/gas.vim
mkdir -p ~/.vim/ftdetect
echo "au BufRead,BufNewFile *.asm set syntax=gas" > ~/.vim/ftdetect/mine.vim
