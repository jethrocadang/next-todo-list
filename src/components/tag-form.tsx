"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

interface TagFormProps {
  className?: string;
  variant? : "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
}
const TagForm = ({ className, variant }: TagFormProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn("", className)} variant={variant}>
          <span className="text-xl">+ &nbsp;</span> New Tag
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Tag</DialogTitle>
          <DialogDescription>Add a new tag for your Team</DialogDescription>
        </DialogHeader>
        <div>
          <Label>Title</Label>
          <Input />
        </div>
        <Button className="w-full">Create Tag</Button>
      </DialogContent>
    </Dialog>
  );
};

export default TagForm;
