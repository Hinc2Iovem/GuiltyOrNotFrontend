import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type MissionTypes = {
  id: number;
  title: string;
  description: string;
  defeatExp: number;
  defeatMoney: number;
  rewardExp: number;
  rewardMoney: number;
  levelOfDifficulty: number;
  role: string;
};

export function useMissions() {
  return useQuery({
    queryKey: ["missions"],
    queryFn: async () => {
      const { data } = await axios.get<MissionTypes[]>(
        "http://localhost:8080/api/v1/missions"
      );
      return data;
    },
  });
}
