import TagForm from "@/components/tag-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const TagsFilter = () => {
  return (
    <Card className="flex w-full flex-col items-center justify-between gap-3 p-2.5 tracking-wide md:flex-row md:gap-0 md:p-5">
      <div className="w-full md:hidden">
        <TagForm className="w-full" variant={"outline"} size={"sm"} />
      </div>
      <Separator className="md:hidden" />
      <ScrollArea className="w-[300px] rounded-md lg:hidden">
        <div className="flex flex-row gap-2.5">
          <Badge>Design</Badge>
          <Badge>Code</Badge>
          <Badge>Design</Badge>
          <Badge>Code</Badge>
          <Badge>Design</Badge>
          <Badge>Code</Badge>
          <Badge>Design</Badge>
          <Badge>Code</Badge>
          <Badge>Design</Badge>
          <Badge>Code</Badge>
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
      <div className="hidden flex-row gap-2.5 lg:flex">
        <Badge>Design</Badge>
        <Badge>Code</Badge>
        <Badge>Design</Badge>
        <Badge>Code</Badge>
        <Badge>Design</Badge>
        <Badge>Code</Badge>
        <Badge>Design</Badge>
        <Badge>Code</Badge>
        <Badge>Design</Badge>
        <Badge>Code</Badge>
      </div>
      <div className="hidden md:block">
        <TagForm />
      </div>
    </Card>
  );
};

export default TagsFilter;
