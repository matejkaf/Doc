# Input/Output Redirection in the Shell

[Gabe Berke-Williams](https://thoughtbot.com/blog/authors/gabe-berke-williams) 

 August 3, 2015 UPDATED ON March 23, 2019

- [UNIX](https://thoughtbot.com/blog/tags/unix)

When we type something into our terminal program, we’ll often see output. For example:

```
$ echo hello
hello
```

As we can see, `echo hello` is a command that means “output hello”. But where does that output really go?

## [Standard output](https://thoughtbot.com/blog/input-output-redirection-in-the-shell#standard-output)

Every Unix-based operating system has a concept of “a default place for output to go”. Since that phrase is a mouthful, everyone calls it “standard output”, or “stdout”, pronounced *standard out*. Your shell (probably bash or zsh) is constantly watching that default output place. When your shell sees new output there, it prints it out on the screen so that you, the human, can see it. Otherwise `echo hello` would send “hello” to that default place and it would stay there forever.

## [Standard input](https://thoughtbot.com/blog/input-output-redirection-in-the-shell#standard-input)

Standard input (“stdin”, pronounced *standard in*) is the default place where commands listen for information. For example, if you type `cat` with no arguments, it listens for input on stdin, outputting what you type to stdout, until you send it an EOF character (CTRL+d):

```
$ cat
hello there
hello there
say it again
say it again
[ctrl+d]
```

As you can see, with standard input, you can send a string to a command directly.

## [Pipes](https://thoughtbot.com/blog/input-output-redirection-in-the-shell#pipes)

Pipes connect the standard output of one command to the standard input of another. You do this by separating the two commands with the pipe symbol (`|`). Here’s an example:

```
$ echo "hello there"
hello there
$ echo "hello there" | sed "s/hello/hi/"
hi there
```

`echo "hello there"` prints `hello there` to stdout. But when we pipe it to `sed "s/hello/hi/"`, sed takes that output as its input and replaces “hello” with “hi”, then prints out that result to stdout. Your shell only sees the final result after it’s been processed by sed, and prints that result to the screen.

Hey, if sed sends its result to standard out, can we pipe sed to another sed? Yep!

```
$ echo "hello there" | sed "s/hello/hi/" | sed "s/there/robots/"
hi robots
```

Above, we’ve connected echo to sed, then connected that to another sed. Pipes are great for taking output of one command and transforming it using other commands like [jq](https://thoughtbot.com/blog/jq-is-sed-for-json). They’re a key part of [the Unix philosophy](http://www.catb.org/esr/writings/taoup/html/ch01s06.html) of “small sharp tools”: since commands can be chained together with pipes, each command only needs to do one thing and then hand it off to another command.

## [Standard error](https://thoughtbot.com/blog/input-output-redirection-in-the-shell#standard-error)

Standard error (“stderr”) is like standard output and standard input, but it’s the place where error messages go. To see some stderr output, try catting a file that doesn’t exist:

```
$ cat does-not-exist
cat: does-not-exist: No such file or directory
```

Hey, that output looks just like stdout! But wait a moment. Let’s try transforming that output with pipes:

```
$ cat does-not-exist | sed 's/No such/ROBOT SMASH/'
cat: does-not-exist: No such file or directory
```

Whoa - nothing changed! Remember, pipes take the stdout of the command to the left of the pipe. `cat`‘s error output went to stderr, not stdout, so nothing came through the pipe to sed. It’s good that stderr doesn’t go through the pipe by default: when we pipe output through something that doesn’t output stdout to the terminal, we still want to see errors immediately. For example, imagine [a command that reads stdin and sends it to the printer](https://www.freebsd.org/cgi/man.cgi?query=lpr&sektion=1): you wouldn’t want to have to walk over to the printer to see its errors.

We need to redirect `cat`’s stderr to stdout so that it goes through the pipe. And that means we need to learn about redirecting output.

## [Redirecting output](https://thoughtbot.com/blog/input-output-redirection-in-the-shell#redirecting-output)

By default, stdout and stderr are printed to your terminal – that’s why you can see them at all. But we can *redirect* that output to a file using the `>` operator:

```
$ echo hello
hello
$ echo hello > new-file
$ cat new-file
hello
```

The second `echo` didn’t print anything to the terminal because we redirected its output to a file named `new-file`. Actually `> new-file` does two things:

- It creates a file named `new-file` if it doesn’t exist; and
- it replaces `new-file`’s contents with the new contents

So if `new-file` already existed, and we did `echo hello > new-file`, it would now have only `hello` in it. If you want to append to the file, rather than replacing its contents, you can use the `>>` operator:

```
$ cat new-file
hello
$ echo hello again >> new-file
$ cat new-file
hello
hello again
```

## [File descriptors](https://thoughtbot.com/blog/input-output-redirection-in-the-shell#file-descriptors)

A [file descriptor](https://en.wikipedia.org/wiki/File_descriptor), or FD, is a positive integer that refers to an input/output source. For example, stdin is 0, stdout is 1, and stderr is 2. Those might seem like arbitrary numbers, because they are: the [POSIX standard](http://pubs.opengroup.org/onlinepubs/9699919799/functions/stdin.html) defines them as such, and many operating systems (like OS X and Linux) implement at least this part of the POSIX standard.

To duplicate output to a file descriptor, use the `>&` operator plus the FD number. For example:

```
# Redirect stdout to stdout (FD 1)
$ echo "hello there" >&1
hello there
# Redirect stdout to stderr (FD 2)
$ echo "hello there" >&2
hello there
```

This is very similar to redirecting output to a file, as we did above, but you can think of stdout and friends as special files that require us to use `>&` instead of `>`.

Visually all of the output above looks the same, but the changes become apparent when we start piping output. Let’s see what happens when we redirect to stdout versus when we redirect to stderr:

```
# Redirect to stdout, so it comes through the pipe
$ echo "no changes" >&1 | sed "s/no/some/"
some changes
# Redirect to stderr, so it does not come through
$ echo "no changes" >&2 | sed "s/no/some/"
no changes
```

## [ZSH users, take note!](https://thoughtbot.com/blog/input-output-redirection-in-the-shell#zsh-users-take-note)

If you’re using ZSH, you may have already noticed slightly different results.

This is due to ZSH’s [`MULTIOS` option](http://zsh.sourceforge.net/Doc/Release/Redirection.html#Multios), which is [on by default](http://linux.die.net/man/1/zshoptions). The `MULTIOS` option means that`echo something >&1 | other_command` will output to FD 1 *and* pipe the output to `other_command`, rather than only piping it. To turn this off, run `unsetopt MULTIOS`.

Here’s what the output of ZSH with the `MULTIOS` option looks like:

```
# ZSH with MULTIOS option on
$ echo "hello there" >&1 | sed "s/hello/hi/"
hi there
hi there
$ echo "hello there" >&2 | sed "s/hello/hi/"
hello there
hi there
```

For this blog post, I’ll assume you’re using bash, or have ZSH with the `MULTIOS` option unset.

## [Advanced file descriptors](https://thoughtbot.com/blog/input-output-redirection-in-the-shell#advanced-file-descriptors)

Let’s say you have stderr output mingled with stdout output – perhaps you’re running the same command over many files, and the command may output to stdout or stderr each time. For convenience, the command outputs “stdout” to stdout, and “stderr” to stderr, plus the file name. The visual output looks like this:

```
$ ./command file1 file2 file3
stdout file1
stderr file2
stdout file3
```

We want to transform every line to have “Robot says: ” before it, but just piping the command to sed won’t work, because (again) pipes only grab stdout:

```
$ ./command file1 file2 file3 | sed "s/^/Robot says: /"
stderr file2
Robot says: stdout file1
Robot says: stdout file3
```

This is a common use case for file descriptors: redirect stderr to stdout to combine stderr and stdout, so you can pipe everything as stdout to another process.

Let’s try it:

```
$ ./command file1 file2 file3 2>&1 | sed "s/std/Robot says: std/"
Robot says: stderr file2
Robot says: stdout file1
Robot says: stdout file3
```

It worked! We successfully redirected stderr (FD 2) into stdout (FD 1), combining them and sending the combined output through stdout.

## [Common use cases](https://thoughtbot.com/blog/input-output-redirection-in-the-shell#common-use-cases)

We could further redirect that combined output to a file, to review the combined output later at our leisure:

```
$ ./command file1 file2 file3 > log-file 2>&1
$ cat log-file
stderr file2
stdout file1
stdout file3
```

Neat: we’ve captured both stderr and stdout in a file. One interesting point is that we need to do this:

```
# Correct
> log-file 2>&1
```

and not this:

```
# Wrong
2>&1 > log-file
```

The correct version points stdout at the log file, then redirects stderr to stdout, so both stderr and stdout point at the log file. The wrong version points stderr at stdout (which outputs to the shell), then redirects stdout to the file. Thus only stdout is pointing at the file, because stderr is pointing to the “old” stdout.

Another common use for redirecting output is redirecting only stderr. To redirect a file descriptor, we use `N>`, where N is a file descriptor. If there’s no file descriptor, then stdout is used, like in `echo hello > new-file`.

We can use this new syntax to silence stderr by redirecting it to `/dev/null`, which happily swallows whatever it receives and does nothing with it. It’s the black hole of input/output. Let’s try it:

```
# Redirect stdout, because it's plain `>`
$ ./command file1 file2 file3 > log-file
stderr file2
# Redirect stderr, because it's `2>`
$ ./command file1 file2 file3 2> log-file
stdout file1
stdout file3
```

Excellent.

## [Further reading](https://thoughtbot.com/blog/input-output-redirection-in-the-shell#further-reading)

Peteris Krumins wrote an excellent [blog post](http://www.catonmat.net/blog/bash-one-liners-explained-part-three/) about bash redirection and goes into more detail on custom file descriptors.

If you’re a little rusty on `sed`, try this [gentle introduction](https://thoughtbot.com/blog/sed-102-replace-in-place).

Joël wrote a blog post on file descriptors and what they map to in “[IO in Ruby](https://thoughtbot.com/blog/io-in-ruby)”.

And if you want your very own `./command` to test out the examples in this post:

```
#!/bin/bash

for f in $@; do
  if [[ $f == "file2" ]]; then
    echo "stderr file2" >& 2
  else
    echo "stdout $f"
  fi
done
```