
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>Edit Profile</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save whenre done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
           
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
        
            
          </div>
        </div>
        <DialogFooter>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
