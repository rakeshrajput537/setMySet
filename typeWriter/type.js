    const typewriter = new Typewriter('#typewriter', {
      loop: true,
    });

    typewriter.typeString('GET THE TEXT YOU WANT')
      .pauseFor(1000)
      // .deleteAll()
      // .typeString('I am Web Developer')
      // .pauseFor(2500)
      // .deleteChars(13)
      .typeString('<br>')
      .typeString('<strong>IN 2 MINUTES<strong>')
      .pauseFor(1000)
      .typeString(' ON YOUR PHONE')
      .pauseFor(2500)      
      .start();
