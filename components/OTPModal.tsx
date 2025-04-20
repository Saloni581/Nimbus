"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import {useState} from "react";
import Image from 'next/image'
import {Button} from "@/components/ui/button";
import {sendEmailOTP, verifySecret} from "@/lib/actions/user.actions";
import {useRouter} from "next/navigation";



const OtpModal = ({email, accountId} : {email: string, accountId: string}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const sessionId = await verifySecret({accountId, password});
            if(sessionId){
                return router.push("/");
            }
        } catch(error) {
            console.log("Failed to verify OTP",error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleResendOTP = async () => {
        await sendEmailOTP({email});
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="shad-alert-dialog">
                <DialogHeader className="relative flex justify-center">
                    <DialogTitle className="h2 text-center">
                        Enter your OTP
                        <Image
                            src="/assets/icons/close-dark.svg"
                            alt="close"
                            width={20}
                            height={20}
                            onClick={() => setIsOpen(false)}
                            className="otp-close-button"/>
                    </DialogTitle>
                    <DialogDescription className="subtitle-2 text-center text-light-100">
                        We&apos;ve sent a code to <span className="pl-1 text-brand">{email}</span>
                    </DialogDescription>
                    <InputOTP maxLength={6} value={password} onChange={setPassword}>
                        <InputOTPGroup className="shad-otp">
                            <InputOTPSlot index={0} className="shad-otp-slot"/>
                            <InputOTPSlot index={1} className="shad-otp-slot"/>
                            <InputOTPSlot index={2} className="shad-otp-slot"/>
                            <InputOTPSlot index={3} className="shad-otp-slot"/>
                            <InputOTPSlot index={4} className="shad-otp-slot"/>
                            <InputOTPSlot index={5} className="shad-otp-slot"/>
                        </InputOTPGroup>
                    </InputOTP>
                </DialogHeader>
                <DialogFooter>
                <div className="lg: mx-20">
                <div className="flex flex-col w-full gap-4">
                    <Button
                        type="button"
                        className="shad-submit-btn h-12"
                        onClick={handleSubmit}
                    >
                        Submit
                    {isLoading && (<Image
                        src="/assets/icons/loader.svg"
                        alt="logo"
                        width={24}
                        height={24}
                        className="ml-2 animate-spin"
                    />)}
                    </Button>
                </div>
                <div className="subtitle-2 mt-2 text-center text-light-100">
                    Didn&spos;t get a code?
                    <Button
                        type="button"
                        variant="link"
                        className="pl-1 text-brand"
                        onClick={handleResendOTP}
                    >
                        click to resend
                    </Button>
                </div>
                </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    );
};

export default OtpModal;