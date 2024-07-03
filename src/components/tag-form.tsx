"use client";

import { Button, ButtonProps } from "./ui/button";
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

interface TagFormProps extends Pick<ButtonProps, 'variant' | 'size' | 'asChild'> {
  className?: string;
}
const TagForm = ({ className, variant, size, asChild }: TagFormProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn("", className)} variant={variant} size={size}>
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
