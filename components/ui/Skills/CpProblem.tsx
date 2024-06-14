import { useEffect, useState } from "react";
import { HoverEffect } from "../card-hover-effect";
import axios from "axios";

export function CpProblem() {
  const [solved, setSolved] = useState([]);
  const [avatar, setAvatar] = useState([]);
  const [rating, setRating] = useState([]);
  const [rank, setRank] = useState([]);
  const [org, setOrg] = useState([]);
  const [max, setMax] = useState([]);
  const [maxRank, setMaxRank] = useState([]);
  const [cont, setCont] = useState([]);

  const CodeForcesSolvesStatsApi = 'https://codeforces.com/api/user.status?handle=ysislm';

  useEffect(() => {
    // Make a GET request
    axios
      .get(CodeForcesSolvesStatsApi)
      .then((response) => {
        if (response.data.status === 'OK') {
          const submissions = response.data.result;
          const solvedProblems = new Set();
          // Iterate through the submissions and add solved problems to the set
          for (const submission of submissions) {
            if (submission.verdict === 'OK') {
              const problemId = submission.problem.contestId + submission.problem.index;
              solvedProblems.add(problemId);
            }
          }
          const solvedProblemsCount: any = solvedProblems.size;
          setSolved(solvedProblemsCount);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [CodeForcesSolvesStatsApi]);

  const CodeForcesHandleWithOutSolvedStatsApi = `https://codeforces.com/api/user.info?handles=ysislm`;
  useEffect(() => {
    axios.get(CodeForcesHandleWithOutSolvedStatsApi)
      .then((response) => {
        if (response.data.status === 'OK') {
          const avatar = response.data.result.avatar;
          setAvatar(response.data.result[0].avatar);
          setRating(response.data.result[0].rating);
          setRank(response.data.result[0].rank);
          setOrg(response.data.result[0].organization);
          setMax(response.data.result[0].maxRating);
          setCont(response.data.result[0].contribution);
          setMaxRank(response.data.result[0].maxRank);
        }
      });
  }, [CodeForcesHandleWithOutSolvedStatsApi]);

  const projects: {
    title: string;
    description: string;
    link: string;
    className?: string | undefined;
  }[] = [
      {
        title: "CodeForces",
        description: `Total Solved:${solved}|Cont: ${cont}\nMaxR: ${max}|Rank: ${rank}\nRating:${rating}|MaxRan: ${maxRank}\n${org}`,
        link: "https://codeforces.com/profile/ysislm",
      },
      {
        title: "Beecrowed",
        description: `Total Solved: 165\nPlace: 12,503th\nPoints: 416.8929\n${org}`,
        link: "https://judge.beecrowd.com/en/profile/460717",
      },
      {
        title: "HackerRank",
        description: `Hackos: 4916\nLevel: Silver\n${org}`,
        link: "https://www.hackerrank.com/profile/grimlock04",
      },
    ];


  return (
    <div className="max-w-5xl text-sm mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
