import React from 'react';
import { Badge } from "@/components/ui/badge"


interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  { date: 'Aug 2024 - present', title: 'Scandit', description: 'Test Automation Engineer' },
  { date: 'May 2024 - Aug 2024', title: 'Scandit', description: 'Test Automation Engineering Intern' },
  { date: 'May 2023 - Aug 2023', title: 'Eventio Group Oy', description: 'Software Developer' },
  { date: 'Jun 2019 - Jun 2019', title: 'Sandvik', description: 'Trainee' },
  { date: 'Nov 2018 - Dec 2018', title: 'Suunto', description: 'Trainee' },
];

const Timeline: React.FC = () => {
  return (
    <div className="timeline relative space-y-16 max-w-2xl mx-auto">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
      {timelineData.map((item, index) => (
        <div key={index} className="timeline-item flex items-center">
          {index % 2 === 0 ? (
            <>
              <div className="timeline-content w-1/2 px-8 text-right">
                <Badge variant="secondary" className="mb-2">{item.date}</Badge>
                <h3 className="timeline-title text-lg font-semibold">{item.title}</h3>
                <p className="timeline-description text-sm text-gray-600">{item.description}</p>
              </div>
              <div className="w-1/2 relative">
                <div className="absolute left-0 transform -translate-x-1/2 bg-red-500 w-4 h-4 rounded-full border-2 border-white"></div>
              </div>
            </>
          ) : (
            <>
              <div className="w-1/2 relative">
                <div className="absolute right-0 transform translate-x-1/2 bg-red-500 w-4 h-4 rounded-full border-2 border-white"></div>
              </div>
              <div className="timeline-content w-1/2 px-8 text-left">
                <Badge variant="secondary" className="mb-2">{item.date}</Badge>
                <h3 className="timeline-title text-lg font-semibold">{item.title}</h3>
                <p className="timeline-description text-sm text-gray-600">{item.description}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline; 