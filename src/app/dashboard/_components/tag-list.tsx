import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import tags from "@/app/store/_components/tags-dummy";
import { Badge } from "@/components/ui/badge";
import TagForm from "@/components/tag-form";

const TagList = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Tags</CardTitle>
        <TagForm variant={"outline"} size={"sm"}/>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Badge key={tag.id}>{tag.title}</Badge>
        ))}
      </CardContent>
    </Card>
  );
};

export default TagList;
