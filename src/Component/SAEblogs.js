import React from 'react';
import { useParams } from 'react-router-dom';

const projectDetails = {
  "abhedya-robotics": {
    1: { title: "Robowars", description: "Battle robot designed for combat competitions", details: "Detailed info about Robowars..." },
    2: { title: "Maze Solver", description: "Robot designed to navigate and solve mazes autonomously", details: "Detailed info about Maze Solver..." },
    // add more project details
  },
  "garuda-motorsports": {
    1: { title: "H-BAJA", description: "Off-road vehicle project done by Garuda Motorsports", details: "Detailed info about H-BAJA..." },
  },
  "vayuveer-aerospace": {
    1: { title: "RC Craft", description: "Remote-controlled aircraft designed for aerospace experiments", details: "Detailed info about RC Craft..." },
    2: { title: "Drone Rescue", description: "Drone capable of executing rescue missions", details: "Detailed info about Drone Rescue..." },
  },
};

export default function ProjectDetails() {
  const { wing, projectId } = useParams();
  const project = projectDetails[wing] && projectDetails[wing][projectId];

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-2">{project.description}</p>
      <div className="mt-4">{project.details}</div>
    </div>
  );
}