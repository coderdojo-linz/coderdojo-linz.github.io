sudo apt-get update
sudo apt-get install -qqy build-essential gdb libc6-dev-i386
curl --output nasm-2.12.02.tar.gz http://www.nasm.us/pub/nasm/releasebuilds/2.12.02/nasm-2.12.02.tar.gz
sudo tar -xzf nasm-2.12.02.tar.gz --directory /usr/local/src
cd /usr/local/src/nasm-2.12.02/
sudo ./configure
sudo make
sudo make install
sudo cp nasm.1 /usr/local/man/man1
sudo cp ndisasm.1 /usr/local/man/man1
