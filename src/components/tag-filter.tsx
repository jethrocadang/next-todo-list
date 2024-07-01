

import TagForm from "@/components/tag-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TagsFilter = () => {
  return (
    <Card className="flex w-full flex-row justify-between p-5 tracking-wide items-center">
      <div className="space-x-1.5 my-auto">
        <Badge>Design</Badge>
        <Badge>Code</Badge>
      </div>
     <TagForm/>
    </Card>
  );
};

export default TagsFilter;
