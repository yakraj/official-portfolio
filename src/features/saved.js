gsap.to([DomHouse.current, DomeDoor.current, youtubeIntro.current], {
    scrollTrigger: {
      trigger: DomHouse.current,
      start: "bottom bottom",
      end: "+=1200",
      scrub: true,
      markers: true,
      onLeaveBack: "reverse",
    },
    width: gsap.utils.wrap(["100vw", "26%", "14%"]),
    height: gsap.utils.wrap(["100vw", "44%", "9%"]),
    left: gsap.utils.wrap(["", "37%", "50%"]),
    borderTop: gsap.utils.wrap(["", "22px solid #4c4c4c", ""]),
    borderLeft: gsap.utils.wrap(["", "22px solid #959595", ""]),
    borderRight: gsap.utils.wrap(["", "22px solid #959595", ""]),
  
    // add the second animation to the timeline
    onComplete: function () {
      gsap.to(DomHouse.current, {
        scrollTrigger: {
          trigger: DomHouse.current,
          start: "1000 bottom",
          end: "+=500",
          scrub: true,
          markers: true,
          startAt: {
            trigger: DomHouse.current,
            start: "bottom bottom+=200",
          },
          onUpdate: function (self) {
            // Update the start and end points on each scroll
            start = `bottom ${self.trigger.top}`;
            end = `+=${window.innerHeight * 2}`;
            self.update();
          },
        },
        height: "400vw",
        width: "400vw",
        onComplete: function () { 
          gsap.to(withcomputer.current, {
            scrollTrigger: {
              trigger: withcomputer.current,
              // toggleActions: "restart pause reverse pause",
              start: "1000 bottom",
              end: "+=1000",
              scrub: true,
              markers: true,
              startAt: {
                trigger: DomHouse.current,
                start: "bottom bottom+=200",
              },
              onUpdate: function (self) {
                // Update the start and end points on each scroll
                start = `bottom ${self.trigger.top}`;
                end = `+=${window.innerHeight * 2}`;
                self.update();
              },
            },
            onComplete: function () {
              gsap.to(withcomputer.current, { 
                scrollTrigger: {
                  trigger: withcomputer.current,
                  // toggleActions: "restart pause reverse pause",
                  start: "2000 bottom",
                  end: "+=600",
                  scrub: true,
                  markers: true,
                  onUpdate: function (self) {
                    // Update the start and end points on each scroll
                    start = `bottom ${self.trigger.top}`;
                    end = `+=${window.innerHeight * 2}`;
                    self.update();
                  },
                },
                scale: 10,
                marginLeft: "60%",
                onComplete: function () {
                  // set the trigger point to a section below DomHouse
                  gsap.to(DomHouse.current, {
                    scrollTrigger: {
                      trigger: DomHouse.current,
                      start: "2600 bottom",
                      end: "+=600",
                      scrub: true,
                      markers: true,
                      onLeaveBack: "reverse",
                      onUpdate: function (self) {
                            // Update the start and end points on each scroll
                            start = `bottom ${self.trigger.top}`;
                            end = `+=${window.innerHeight * 2}`;
                            self.update();
                          },
                        },
                        filter: "brightness(0) invert(1)",
                        opacity: 0,
                      });
                    },
                  });
                },
              });
            },
          });
        },
      });


      gsap.to(DomHouse.current, {
        scrollTrigger: {
          trigger: DomHouse.current,
          start: "2500 bottom",
          end: "+=400",
          scrub: true,
          markers: true,
        },
        filter: "brightness(0) invert(1)",
        opacity: 0,
        onComplete: function () {
          // Add new scrollTrigger for scrolling upwards
          ScrollTrigger.create({
            trigger: DomHouse.current,
            start: "bottom top", // set to bottom of viewport
            end: "bottom bottom", // set to top of viewport
            scrub: true,
            onEnter: function () {
              gsap.set(DomHouse.current, { opacity: 1 }); // set opacity to 1 when entering viewport
            },
            onLeave: function () {
              gsap.set(DomHouse.current, { opacity: 0 }); // set opacity to 0 when leaving viewport
            },
          });
        },
      });
      console.log("this state is runned now");