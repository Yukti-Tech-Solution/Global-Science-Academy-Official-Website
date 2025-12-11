import { FacultyMember } from "@/data/facultyData";
import { Card, CardContent } from "@/components/ui/card";

interface FacultyCardProps {
  member: FacultyMember;
}

const FacultyCard = ({ member }: FacultyCardProps) => {
  return (
    <Card className="bg-white dark:bg-secondary rounded-lg shadow-sm transition-all duration-200 p-4 text-center h-full">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-foreground mb-1">
        {member.name}
      </h3>
      <p className="text-primary text-sm font-medium mb-1">{member.subject}</p>
      {member.qualification ? (
        <p className="text-gray-600 dark:text-muted-foreground text-xs">
          {member.qualification}
        </p>
      ) : null}
    </Card>
  );
};

export default FacultyCard;

