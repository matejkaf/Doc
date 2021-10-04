CC=gcc
CFLAGS=-Wall -g -O0 -fno-stack-protector -U_FORTIFY_SOURCE -D_FORTIFY_SOURCE=0


SOURCES=$(wildcard *.c)
EXECUTABLES=$(SOURCES:%.c=%)

all: $(EXECUTABLES)
	rm -rf *.dSYM
	
clean:
	rm -rf $(EXECUTABLES) *.dSYM
