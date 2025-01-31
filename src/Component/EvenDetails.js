import React ,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { Circle, Heart, ChevronRight, MapPinHouse, Calendar, Share2, UsersRound, Clock11 } from "lucide-react";

const eventDetails = {
  1:{
    name: "Line Follower",
    location: "UIET Chandigarh",
    startDate: "TBD",
    endDate: "TBD",
    stages: [
      {
        date: "TBD",
        name: "Round 1: STILL OBJECT",
        details:
          "The participants will be given a still object, for example a bottle with sample measurements provided. The participant must design a 3D model.",
      },
      {
        date: "TBD",
        name: "Round 2: MOVABLE ASSEMBLY",
        details:
          "The basic design of a Slider Crank Mechanism has been provided. Model accordingly and assume all necessary and unstated dimensions.",
      },
      {
        date: "TBD",
        name: "Round 3: Animation & Presentation",
        details:
          "Create a short animation showcasing your product's functionality and present your design choices and considerations.",
      },
    ],
    COMPETITIONFORMAT: [
      "The competition requires the participants to design the objects. The participants will have to submit a report and the CAD file. This event runs for 3 hours. The problem statement will be released at around 15 min after the designated time. Then the participant will be required to do 1st and 2nd  questions."
    ],
    competitionRules: [
      "Plagiarism will be penalized.",
      "Behavior with the organizer and other participants can impact on the marking.",
      "Everyone must reach the designated time or else organizers will have no responsibility for their entry.",
      "Participants are free to choose any commercially available CAD software for this competition.",
      "Standard engineering practices and principles should be followed in the design process.",
      "Participants are encouraged to consider factors like material selection, manufacturability, and safety in their designs.",
    ],
    sampleProblemStatement: [
      "Design a daily use Bottle.",
      "Model a simple Slider Crank Mechanism.",
    ],
    markingScheme: [
      "Points will be calculated out of a total of 100 points.",
      "The 2nd question (Mechanism) carries more points than the 1st (Daily use Object).",
      "3D model of the two objects carries x+y = z points in total.",
      "Animations of the working mechanisms carry a+b = c points in total (e.g., Bottle cap opening/closing and Slider movement).",
      "Extra features carry u+v = w points (e.g., Label for Bottle, Dimensional Accuracy).",
      "Similarity of the design created with the photograph of the real-life object shall be a contributing factor.",
      "Late submissions carry penalties. The decision rests upon the judges and administrators.",
    ],
    importantNote: [
      "Any decision made by the judges will be final. However, participants can contact the event head if they feel that the judgment is not accurate. But please note that this does not guarantee that the decision will be reversed.",
      "WhatsApp group has been made for all participants.",
      "Assume all necessary and unstated dimensions. Try making the design symmetrical."
    ],
  },
  2: {
    name: "CAD Design Showdown",
    location: "UIET Chandigarh",
    startDate: "TBD",
    endDate: "TBD",
    stages: [
      {
        date: "TBD",
        name: "Round 1: STILL OBJECT",
        details:
          "The participants will be given a still object, for example a bottle with sample measurements provided. The participant must design a 3D model.",
      },
      {
        date: "TBD",
        name: "Round 2: MOVABLE ASSEMBLY",
        details:
          "The basic design of a Slider Crank Mechanism has been provided. Model accordingly and assume all necessary and unstated dimensions.",
      },
      {
        date: "TBD",
        name: "Round 3: Animation & Presentation",
        details:
          "Create a short animation showcasing your product's functionality and present your design choices and considerations.",
      },
    ],
    COMPETITIONFORMAT: [
      "The competition requires the participants to design the objects. The participants will have to submit a report and the CAD file. This event runs for 3 hours. The problem statement will be released at around 15 min after the designated time. Then the participant will be required to do 1st and 2nd  questions."
    ],
    competitionRules: [
      "Plagiarism will be penalized.",
      "Behavior with the organizer and other participants can impact on the marking.",
      "Everyone must reach the designated time or else organizers will have no responsibility for their entry.",
      "Participants are free to choose any commercially available CAD software for this competition.",
      "Standard engineering practices and principles should be followed in the design process.",
      "Participants are encouraged to consider factors like material selection, manufacturability, and safety in their designs.",
    ],
    sampleProblemStatement: [
      "Design a daily use Bottle.",
      "Model a simple Slider Crank Mechanism.",
    ],
    markingScheme: [
      "Points will be calculated out of a total of 100 points.",
      "The 2nd question (Mechanism) carries more points than the 1st (Daily use Object).",
      "3D model of the two objects carries x+y = z points in total.",
      "Animations of the working mechanisms carry a+b = c points in total (e.g., Bottle cap opening/closing and Slider movement).",
      "Extra features carry u+v = w points (e.g., Label for Bottle, Dimensional Accuracy).",
      "Similarity of the design created with the photograph of the real-life object shall be a contributing factor.",
      "Late submissions carry penalties. The decision rests upon the judges and administrators.",
    ],
    importantNote: [
      "Any decision made by the judges will be final. However, participants can contact the event head if they feel that the judgment is not accurate. But please note that this does not guarantee that the decision will be reversed.",
      "WhatsApp group has been made for all participants.",
      "Assume all necessary and unstated dimensions. Try making the design symmetrical."
    ],
  },
};

export default function EventDetailsPage() {
  const [scrolled, setScrolled] = useState(0);
  
  useEffect(() => {
   
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { eventId } = useParams();
  const event = eventDetails[eventId];

  if (!event) {
    return <div className="text-center text-red-500">Event not found</div>;
  }

  return (
    <div className="min-h-screen flex gap-[6%] bg-black text-white overflow-hidden relative z-0 py-8 px-4 md:px-12 lg:px-24">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
      </div>
      <div className="md:w-[65%] sm:w-[99%] sm:px-[16px] sm:py-[3px]">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-8 rounded-lg shadow-md mb-10">
          <h1 className="text-4xl font-bold mb-4">{event.name}</h1>
          <p className="text-lg relative flex items-center gap-2"><MapPinHouse size={20} />{event.location}</p>
          <p className="text-md mt-2 relative flex items-center gap-2">
            <Calendar size={20} /> {event.startDate} - {event.endDate}
          </p>
        </div>
        {/* for smaller screen details cards*/}
        <div className="md:hidden bg-gray-900 p-6  rounded-lg h-[26em] shadow-lg text-white mb-10 border border-blue-500 shadow-blue-500/50">
          <div className="flex sm:flex-row items-center sm:justify-between gap-4">
            <h2 className="text-2xl font-semibold mb-4">Free</h2>
            <div className="flex items-center justify-center gap-[6%] m-0 -mt-3 sm:gap-4 sm:-mt-2">
              <Heart size={20} /><Calendar size={20} /> <Share2 size={20} />
            </div>
          </div>
          <button className="group relative w-full px-8 py-4 bg-blue-500 rounded-lg overflow-hidden hover:bg-blue-600 transition-all duration-300">
            <div className="absolute inset-0 bg-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <span className="relative flex items-center gap-2">
              Register <ChevronRight size={20} />
            </span>
          </button>
          <div className="mt-4 space-y-2">
            <p className="relative flex items-center items-center gap-2">
              <UsersRound size={20} /><span className="flex flex-col"><strong>Registered:</strong> 7</span>
            </p>
            <p className="relative flex items-center items-center gap-2">
              <Clock11 size={20} /><span className="flex flex-col"><strong>Team Size:</strong> 1 - 30 Members</span>
            </p>
            <p className="relative flex items-center items-center gap-2">
              <Clock11 size={20} /><span className="flex flex-col"><strong>Impressions:</strong> 7,310</span>
            </p>
            <p className="relative flex items-center items-center gap-2">
              <Clock11 size={20} /><span className="flex flex-col"><strong>Registration Deadline:</strong> 4 days left</span>
            </p>
          </div>
        </div>
        {/* details navbar  */}

        {/* Stages and Timelines */}
        <div className="mb-10 mb-10 bg-gray-900 p-8 rounded-lg shadow-lg text-white mb-10 border border-blue-500 shadow-blue-500/50">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">Stages and Timelines</h2>
          <div className="relative border-l-4 border-blue-500 space-y-8 pl-6">
            {event.stages.map((stage, index) => (
              <div key={index} className="relative p-6 bg-gray-900 rounded-lg shadow-lg flex flex-col items-start border border-blue-500 hover:shadow-blue-500/50 transition-all duration-300">
                <div className="absolute -left-14 top-6 w-16 h-16 flex flex-col items-center justify-center bg-blue-500 text-black font-bold rounded-full border border-blue-300 shadow-md text-sm leading-tight text-center hover:shadow-blue-500/50">
                  <span className="text-lg glow-effect">{stage.date.split(" ")[0]}</span>
                  <span className="text-xs glow-effect">{stage.date.split(" ")[1]} {stage.date.split(" ")[2]}</span>
                </div>
                {stage.status && <span className="text-red-500 font-bold">🔴 {stage.status}</span>}
                <h3 className="text-2xl font-bold text-white mt-2 ml-8 glow-effect">{stage.name}</h3>
                <p className="text-gray-300 mt-2 ml-8">{stage.details}</p>
                {stage.subDetails && (
                  <ul className="list-disc list-inside mt-2 text-gray-400 ml-8">
                    {stage.subDetails.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                {stage.mandatory && <p className="mt-2 text-yellow-400 ml-8">Mandatory: {stage.mandatory}</p>}
                <div className="text-sm text-gray-400 mt-2 ml-8">
                  <p>Start: {stage.startTime}</p>
                  <p>End: {stage.endTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* event details */}
        <div className="mb-10 bg-gray-900 p-6 rounded-lg shadow-lg text-white mb-10 border border-blue-500 shadow-blue-500/50">
          <h2 className="text-xl font-semibold mb-6 text-blue-500">
            All that you need to know about '{event.name}'
          </h2>

          <div className="flex flex-col gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white border border-blue-500 hover:shadow-blue-500/50 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4 text-blue-400"> Competition	Format</h3>
              <ul className="list-inside space-y-2">
                {event.COMPETITIONFORMAT.map((rule, index) => (
                  <li key={index} className="text-sm text-gray-300">{rule}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white border border-blue-500 hover:shadow-blue-500/50 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Competition Rules</h3>
              <ul className="list-disc ml-8 space-y-2">
                {event.competitionRules.map((rule, index) => (
                  <li key={index} className="text-sm text-gray-300">{rule}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white border border-blue-500 hover:shadow-blue-500/50 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Sample Problem</h3>
              <ul className=" list-disc ml-8 space-y-3">
                {event.sampleProblemStatement.map((rule, index) => (
                  <li key={index} className="text-sm text-gray-300">{rule}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white border border-blue-500 hover:shadow-blue-500/50 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Marking Scheme</h3>
              <ul className="list-disc ml-8  space-y-3">
                {event.markingScheme.map((scheme, index) => (
                  <li key={index} className="text-sm text-gray-300">{scheme}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white border border-blue-500 hover:shadow-blue-500/50 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Important Note</h3>
              <ul className="list-disc ml-8 space-y-3">
                {event.importantNote.map((note, index) => (
                  <li key={index} className="text-sm text-gray-300">{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block bg-gray-900 p-6 w-[27%] rounded-lg h-[26em] shadow-lg text-white mb-10 border border-blue-500 shadow-blue-500/50">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
          <h2 className="text-2xl font-semibold mb-4">Free</h2>
          <div className="flex items-center justify-center gap-[6%] m-0 -mt-3 sm:gap-4 sm:-mt-2">
            <Heart size={20} /><Calendar size={20} /> <Share2 size={20} />
          </div>
        </div>
        <button className="group relative w-full px-8 py-4 bg-blue-500 rounded-lg overflow-hidden hover:bg-blue-600 transition-all duration-300">
          <div className="absolute inset-0 bg-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          <span className="relative flex items-center gap-2">
            Register <ChevronRight size={20} />
          </span>
        </button>
        <div className="mt-4 space-y-2">
          <p className="relative flex items-center items-center gap-2">
            <UsersRound size={20} /><span className="flex flex-col"><strong>Registered:</strong> 7</span>
          </p>
          <p className="relative flex items-center items-center gap-2">
            <Clock11 size={20} /><span className="flex flex-col"><strong>Team Size:</strong> 1 - 30 Members</span>
          </p>
          <p className="relative flex items-center items-center gap-2">
            <Clock11 size={20} /><span className="flex flex-col"><strong>Impressions:</strong> 7,310</span>
          </p>
          <p className="relative flex items-center items-center gap-2">
            <Clock11 size={20} /><span className="flex flex-col"><strong>Registration Deadline:</strong> 4 days left</span>
          </p>
        </div>
      </div>
    </div>
  );
}
