import type { ClimbingGymDTO } from "@/entities/climbing-gym/model/types";

export function ClimbingGym({ climbingGym }: { climbingGym: ClimbingGymDTO }) {
    return <div>ClimbingGym id: {climbingGym.id}</div>;
}