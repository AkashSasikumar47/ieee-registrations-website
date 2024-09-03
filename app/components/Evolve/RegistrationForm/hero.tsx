import React, { useEffect, useState } from 'react';

const Hero_reg = () => {

    const [titleComplete, setTitleComplete] = useState(false);

    const title = "Unnlock Tomorrow's Tech Today: Dive into Gen-AI with E-Volve";
    const content = "Jooin us for E-Volve: A Generative AI Workshop exclusively for our college community! This is your chance to dive deep into the world of AI, collaborate with fellow students, and explore innovative ideas. Whether you're passionate about technology, eager to learn new skills, or ready to push the boundaries of AI, E-Volve is the perfect opportunity to showcase your talents and be part of something groundbreaking. Don't miss out on this exciting journey of discovery and innovation!";

  return (
    <div className="mt-4 md:mb-12 max-w-2xl">
        <GenContent
            className="mb-4 font-bold text-white text-4xl lg:text-5xl"
            showGenerating={false}
            text={title}
            speed={30}
            complete={() => setTitleComplete(true)}
        />
        {titleComplete && (<GenContent
            className="text-white"
            showGenerating={!titleComplete}
            text={content}
            speed={25}
            complete={() => {}}
        />)}
    </div>
  )
}

export default Hero_reg


interface GenContentProps {
    className: string;
    showGenerating: boolean;
    text: string;
    speed: number;
    complete: VoidFunction;
  }
  
  const GenContent: React.FC<GenContentProps> = ({ className, showGenerating, text, speed, complete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [completed, setCompleted] = useState(false);
  
    useEffect(() => {
        if (!showGenerating) {
          let currentIndex = 0;
          const intervalId = setInterval(() => {
  
  
            if (currentIndex < text.length - 1) {
              setDisplayedText((prev) => prev + text[currentIndex]);
              currentIndex++;
            }
            
            else if (currentIndex === text.length - 1) {
              clearInterval(intervalId);
              setCompleted(true);
              complete();
            }
          }, speed);
      
          return () => clearInterval(intervalId);
        } else {
          setDisplayedText('');
        }
      }, [showGenerating, text]);
  
    return (
      <div
        className={className}
      >
        {showGenerating 
            ? (<span>⚪</span>)
            : (<div>{displayedText}{!completed ? <span>⚪</span> : null}</div>)
        }
      </div>
    );
  };