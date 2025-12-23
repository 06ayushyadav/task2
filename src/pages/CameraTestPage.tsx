import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";

type CameraStatus="idle" | "active" | "stopped" | "error";

const CameraTestPage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [message, setMessage] = useState(
    "Click on start button to test camera"
  );
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<CameraStatus>("idle");

  const handleCameraStart = async () => {
    try {
      setLoading(true);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(mediaStream);
      setStatus("active");
      setMessage("Camera is working ✅");
    } catch (error) {
      setStatus("error");
      setMessage("Camera permission denied or not available ❌");
      console.log("Camera Permission error :", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCameraStop = () => {
    if (!stream) return;
    stream.getTracks().forEach((track) => track.stop());
    setStream(null);
    setStatus("stopped");
    setMessage("Camera Stoped");
  };

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }
  }, [stream]);

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-600 to-slate-800 flex flex-col items-center justify-center gap-8 px-4">
      <div className="flex gap-4">
        {(status==="idle" || status==="error") && (
          <Button
            text="Start Camera"
            variant="start"
            onClick={handleCameraStart}
            disabled={loading}
            loading={loading}
          />
        )}

        {(status==="active" || status==="stopped") && (
          <div className="flex justify-center items-center gap-4">
            <Button
              text="Stop Camera"
              variant="stop"
              onClick={handleCameraStop}
            />
            <Button
              text="Retry Test"
              variant="retry"
              onClick={handleCameraStart}
            />
          </div>
        )}
      </div>

      <p className="text-white text-lg font-medium">{message}</p>

      {stream &&(
        <div className="">
          <p className="text-green-500"> Live camera preview active</p>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full max-w-md rounded-xl shadow-md border border-white " />
        </div>
      )}
    </div>
  );
};

export default CameraTestPage;
